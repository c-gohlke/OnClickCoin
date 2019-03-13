var express = require('express');
var homeRouter = express.Router();

homeRouter.get('/', function(req, res){
  console.log("homeRouter response ")
  res.render('home')
});

module.exports = homeRouter;