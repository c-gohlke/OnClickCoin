const express = require('express');

const loginRouter = express.Router();

loginRouter.get(['/login', 'login/*'], (req, res) => {
  res.render('login');
});

module.exports = loginRouter;
