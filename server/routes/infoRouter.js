const express = require('express');

const infoRouter = express.Router();

infoRouter.get(['/info', '/info*'], (req, res) => {
  res.render('info');
});

module.exports = infoRouter;
