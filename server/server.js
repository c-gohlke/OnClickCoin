//server/server.js

console.log("initializing server");

var express = require("express");
var homeRouter = require("./routes/homeRouter.js");
var contractReceiptRouter = require("./routes/receiptRouter.js");
var sendRouter = require("./routes/sendRouter.js");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../client"));
app.use(express.static(path.join(__dirname, "../client")));

app.use("/", homeRouter);
app.use(["/receipt", "/receipt*"], contractReceiptRouter);
app.use(["/send", "/send*"], sendRouter);


app.get("/", function(req, res) {
  res.render("home");
});

app.get(["/receipt", "/receipt*"], function(req, res) {
  res.render("receipt");
});

app.get(["/send", "/send*"], function(req, res) {
  res.render("send");
});


console.log("exporting server/server.js");

module.exports = app;
