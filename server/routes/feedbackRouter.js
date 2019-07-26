const express = require('express');

const feedbackRouter = express.Router();

feedbackRouter.get('/feedback', (req, res) => {
  res.render('feedback');
});

module.exports = feedbackRouter;
