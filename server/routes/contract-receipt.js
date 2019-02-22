var express = require('express');
var contractReceiptRouter = express.Router();

contractReceiptRouter.get('/', function(req, res){
  res.render('contract-receipt')
});

module.exports = contractReceiptRouter;