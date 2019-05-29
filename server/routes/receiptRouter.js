const express = require('express');

const contractReceiptRouter = express.Router();

contractReceiptRouter.get(['/receipt', '/receipt/*'], (req, res) => {
  res.render('receipt');
});

module.exports = contractReceiptRouter;
