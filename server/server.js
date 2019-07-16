// server/server.js
import {
  bytecodeERC20,
  abiConstructorErc20,
  abiTransferErc20,
} from '../contracts/erc20';

import TransactionSchema from '../app/models/TransactionModel';
import UserSchema from '../app/models/UserModel';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx').Transaction;
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const flash = require('connect-flash');
const homeRouter = require('./routes/homeRouter.js');
const contractReceiptRouter = require('./routes/receiptRouter.js');
const sendRouter = require('./routes/sendRouter.js');
const infoRouter = require('./routes/infoRouter.js');
const dataRouter = require('./routes/dataRouter.js');
const icoRouter = require('./routes/icoRouter.js');
const loginRouter = require('./routes/loginRouter.js');

require('dotenv').config();

const app = express();

app.use(flash());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/', homeRouter);
app.use(['/receipt', '/receipt*'], contractReceiptRouter);
app.use(['/data', '/data*'], dataRouter);
app.use(['/send', '/send*'], sendRouter);
app.use(['/ico', '/ico*'], icoRouter);
app.use(['/info', '/info*'], infoRouter);
app.use(['/login', '/login/*'], loginRouter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const MongoURI = process.env.MONGOLAB_URI;
mongoose.connect(MongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function logDBConnection() {
  console.log('mongoose connected');
});

const User = require('../app/models/UserModel');

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }),
);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(session({ secret: 'cats' }));
app.use(express.urlencoded({ extended: true })); // express body-parser
app.use(passport.initialize());

app.use(passport.session());

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: 'login',
    failureFlash: true,
  }),
);

app.post('/register', async request => {
  // Creates and saves a new user with a salt and hashed password

  const user = new UserSchema({ username: request.body.username });
  await user.setPassword(request.body.password);
  await user.save();

  passport.authenticate('local', {
    successRedirect: `/`,
    failureRedirect: '/login',
  });
});

app.get('/logout', (request, response) => {
  request.logout();
  response.redirect('/');
});

app.delete('/user/:id', async (request, response) => {
  try {
    const result = await UserSchema.deleteOne({
      _id: request.params.id,
    }).exec();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get(['/receipt', '/receipt*'], (req, res) => {
  res.render('receipt');
});
app.get(['/send', '/send*'], (req, res) => {
  res.render('send');
});
app.get(['/info', '/info*'], (req, res) => {
  res.render('info');
});
app.get(['/ico', '/ico*'], (req, res) => {
  res.render('ico');
});
app.get(['/data', '/data*'], (req, res) => {
  res.render('data');
});
app.get(['/login'], (req, res) => {
  res.render('login');
});

app.post('/deploy-contract', async function deploycontract(req, res) {
  // TODO: find way to make synchronous. If many clients use website and deploy tokens at the same time,
  // huge bottleneck happening here, waiting for each individual contract to get confirmed one-at-a-time
  console.log('Deploying contract post request received');

  const apiKey = process.env.INFURA_API_KEY;
  const sendAddr = process.env.ADDRESS;
  const sendPrivKey = process.env.PRIVATE_KEY;
  const { netname } = req.body;
  const endpoint = `https://${netname}.infura.io/v3/${apiKey}`;
  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint), null, {
    transactionConfirmationBlocks: 1,
  });

  const gasPrice = 2500000000;
  const gasLimit = 4000000; // TODO: not hardcoded
  const value = 0;
  const privateKeyFromBuffer = Buffer.from(sendPrivKey, 'hex');

  const abiPackedArgs = web3.eth.abi.encodeFunctionCall(abiConstructorErc20, [
    req.body.symbol,
    req.body.name,
    req.body.decimals,
    req.body.supply,
  ]);

  const removeMethodSignature = abiPackedArgs.substring(10);
  const data = `0x${bytecodeERC20}${removeMethodSignature}`;

  const nonce = await web3.eth.getTransactionCount(sendAddr, 'pending');

  const txParams = {
    nonce,
    gasPrice,
    gasLimit,
    value,
    data,
  };

  const tx = new EthereumTx(txParams, { chain: netname });

  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();

  let userID;
  if (req.user) {
    userID = req.user._id;
  }

  let contractAddr;
  await web3.eth
    .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .once('transactionHash', hash => {
      console.log('transaction hash is', hash);
    })
    .once('confirmation', (confirmationNumber, receipt) => {
      console.log('transaction has been confirmed');
      contractAddr = receipt.contractAddress;
      const transaction = new TransactionSchema({
        name: req.body.name,
        symbol: req.body.symbol,
        decimals: req.body.decimals,
        supply: req.body.supply,
        sender: receipt.from,
        receiver: receipt.to,
        transactionHash: receipt.transactionHash,
        contractAddress: receipt.contractAddress,
        netname,
        userID,
      });

      transaction.save();
    });
  console.log('contractAddr is', contractAddr);

  res.send({
    netname,
    contractAddr,
    account: sendAddr,
  });
});

app.post('/transfer-token', async function transferToken(req, res) {
  // TODO: find way to make synchronous. If many clients use website and deploy tokens at the same time,
  // huge bottleneck happening here, waiting for each individual contract to get confirmed one-at-a-time

  const apiKey = process.env.INFURA_API_KEY;
  const sendAddr = process.env.ADDRESS;
  const sendPrivKey = process.env.PRIVATE_KEY;
  const { netname } = req.body;
  const endpoint = `https://${netname}.infura.io/v3/${apiKey}`;

  const web3 = new Web3(new Web3.providers.HttpProvider(endpoint), null, {
    transactionConfirmationBlocks: 1,
  });

  const gasPrice = 2500000000;
  const gasLimit = 4000000; // TODO: not harcoded

  const privateKeyFromBuffer = Buffer.from(sendPrivKey, 'hex');

  const value = 0;
  const data = web3.eth.abi.encodeFunctionCall(abiTransferErc20, [
    req.body.receiveAddr,
    req.body.sendAmount,
  ]);

  const nonce = await web3.eth.getTransactionCount(sendAddr, 'pending');
  const txParams = {
    nonce,
    gasPrice,
    gasLimit,
    to: req.body.contractAddr,
    value,
    data,
  };

  const tx = new EthereumTx(txParams, { chain: netname });

  tx.sign(privateKeyFromBuffer);
  const serializedTx = tx.serialize();

  let userID = null;
  if (req.user) {
    userID = req.user._id;
  }
  web3.eth
    .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .on('transactionHash', hash => {
      console.log('transaction received, hash is', hash);

      const transaction = new TransactionSchema({
        name: '',
        symbol: '',
        decimals: -1,
        supply: -1,
        transactionHash: hash,
        contractAddress: -1,
        netname,
        userID,
      });

      transaction.save();
    });

  res.end('transaction confirmed');
});

app.post('/transaction', async (request, response) => {
  const transaction = new TransactionSchema(request.body);
  transaction.save();
  response.end('transaction stored');
});

app.get('/transactions/:uid', async (request, response) => {
  response.send(
    await TransactionSchema.find({ userID: request.params.uid }).exec(),
  );
});

app.get('/transactions', async (request, response) => {
  response.send(
    await TransactionSchema.find()
      .sort({ createdAt: -1 })
      .limit(20)
      .exec(),
  );
});

app.get('/username/:uid', async (request, response) => {
  try {
    const creator = await UserSchema.findOne({ _id: request.params.uid });
    response.send(creator.username);
  } catch {
    // no user found, most likely because no userID was specified or because corresponding user was deleted
    response.send('anonymous');
  }
});

app.get('/currentUser', async (request, response) => {
  if (!request.user) {
    response.send('anonymous');
  } else {
    response.send(request.user.username);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
