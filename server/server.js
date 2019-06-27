// server/server.js
import deployContractServer from './api/deployContractServer';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/homeRouter.js');
const contractReceiptRouter = require('./routes/receiptRouter.js');
const sendRouter = require('./routes/sendRouter.js');
const infoRouter = require('./routes/infoRouter.js');

require('dotenv').config();

console.log('endpoint being used is', process.env.ENDPOINT);
console.log('address being used is', process.env.ADDRESS);
console.log('private key being used is', process.env.PRIVATE_KEY);

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

app.post('/deploy-contract', function deploycontract(req, res) {
  // const { symbol } = req;
  // const { name } = req;
  // const { decimals } = req;
  // const { supply } = req;
  console.log('Deploying contract post request called.');
  const post_data = req.body;
  console.log(post_data);

  deployContractServer(
    req.body.symbol,
    req.body.name,
    req.body.decimals,
    req.body.supply,
  );

  res.end('yes');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started');
});
