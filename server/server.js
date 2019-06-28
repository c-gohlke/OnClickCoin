// server/server.js
import {
  bytecodeERC20,
  abiConstructorErc20,
  abiTransferErc20,
} from '../contracts/erc20';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const EthereumTx = require('ethereumjs-tx').Transaction;
const homeRouter = require('./routes/homeRouter.js');
const contractReceiptRouter = require('./routes/receiptRouter.js');
const sendRouter = require('./routes/sendRouter.js');
const infoRouter = require('./routes/infoRouter.js');

require('dotenv').config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/', homeRouter);
app.use(['/receipt', '/receipt*'], contractReceiptRouter);
app.use(['/send', '/send*'], sendRouter);
app.use(['/info', '/info*'], infoRouter);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

  let contractAddr;
  await web3.eth
    .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .once('transactionHash', hash => {
      console.log('transaction hash is', hash);
    })
    .once('confirmation', (confirmationNumber, receipt) => {
      console.log('in deploy contract server, transaction has been confirmed');
      contractAddr = receipt.contractAddress;
    });
  console.log('contractAddr is', contractAddr);

  res.send({
    netname,
    contractAddr,
    account: sendAddr,
  });
});

app.post('/transfer-token', async function deploycontract(req, res) {
  // TODO: find way to make synchronous. If many clients use website and deploy tokens at the same time,
  // huge bottleneck happening here, waiting for each individual contract to get confirmed one-at-a-time
  console.log('Transfer token post request received');

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
  web3.eth
    .sendSignedTransaction(`0x${serializedTx.toString('hex')}`)
    .on('transactionHash', hash => {
      console.log('transaction received, hash is', hash);
    });

  res.end('transaction confirmed');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
