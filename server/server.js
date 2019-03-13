//server/server.js

console.log("initializing server");

var express = require("express");
var homeRouter = require("./routes/homeRouter.js");
var contractReceiptRouter = require("./routes/receiptRouter.js");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

app.use("/", homeRouter);
app.use("/receipt", contractReceiptRouter);

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/receipt", function(req, res) {
  res.render("receipt");
});

console.log("exporting server/server.js");

module.exports = app;
