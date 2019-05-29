const express = require('express');

const contractReceiptRouter = express.Router();

contractReceiptRouter.get(['/receipt', '/receipt/*'], (req, res) => {
  console.log('contractReceipt router response is ', res);
  res.render('receipt');
});

module.exports = contractReceiptRouter;
