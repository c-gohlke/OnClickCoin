var express = require("express");
var sendRouter = express.Router();

sendRouter.get(["/send", "/send*"], function(req, res) {
  console.log("send router response is ", res);
  res.render("send");
});

module.exports = sendRouter;
