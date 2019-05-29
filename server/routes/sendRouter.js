const express = require('express');

const sendRouter = express.Router();

sendRouter.get(['/send', '/send*'], (req, res) => {
  res.render('send');
});

module.exports = sendRouter;
