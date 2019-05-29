const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  console.log('homeRouter response ');
  res.render('home');
});

module.exports = homeRouter;
