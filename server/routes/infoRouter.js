const express = require('express');

const infoRouter = express.Router();

infoRouter.get(['/info', '/info*'], (req, res) => {
  console.log('info router response is ', res);
  res.render('info');
});

module.exports = infoRouter;
