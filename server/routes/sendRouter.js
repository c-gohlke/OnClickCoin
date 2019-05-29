const express = require('express');

const sendRouter = express.Router();

sendRouter.get(['/send', '/send*'], (req, res) => {
  console.log('send router response is ', res);
  res.render('send');
});

module.exports = sendRouter;
