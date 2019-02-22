//server/server.js

console.log("initializing server")

var express = require('express');
var homeRouter = require('./routes/home.js')
var contractReceiptRouter = require('./routes/contract-receipt.js')
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', homeRouter);
app.use('/contract-receipt', contractReceiptRouter);

console.log("exporting server/server.js")

module.exports=app;