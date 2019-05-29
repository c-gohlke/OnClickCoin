// server/server.js

console.log('initializing server');

const express = require('express');
const path = require('path');
const homeRouter = require('./routes/homeRouter.js');
const contractReceiptRouter = require('./routes/receiptRouter.js');
const sendRouter = require('./routes/sendRouter.js');
const infoRouter = require('./routes/infoRouter.js');


const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', homeRouter);
app.use(['/receipt', '/receipt*'], contractReceiptRouter);
app.use(['/send', '/send*'], sendRouter);
app.use(['/info', '/info*'], infoRouter);

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

console.log('exporting server/server.js');

module.exports = app;
