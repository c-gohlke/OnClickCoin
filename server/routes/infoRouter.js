var express = require("express");
var infoRouter = express.Router();

infoRouter.get(["/info", "/info*"], function(req, res) {
  console.log("info router response is ", res);
  res.render("info");
});

module.exports = infoRouter;