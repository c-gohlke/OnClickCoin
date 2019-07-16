const express = require('express');

const dataRouter = express.Router();

dataRouter.get('/data', (req, res) => {
  res.render('data');
});

module.exports = dataRouter;
