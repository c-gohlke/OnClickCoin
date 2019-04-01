var express = require("express");
var contractReceiptRouter = express.Router();

contractReceiptRouter.get(["/receipt", "/receipt/*"], function(req, res) {
  console.log("contractReceipt router response is ", res);
  res.render("receipt");
});

module.exports = contractReceiptRouter;
