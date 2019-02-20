//TODO find a way to make bundle.js smaller

const express = require("express");
var router = require('./routes/routes.js')
const path = require("path");

const app = express();

app.set('views', path.join(__dirname, '../client'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "../client"));
app.use("/", router);


module.exports=app;