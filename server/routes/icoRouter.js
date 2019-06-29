const express = require('express');

const icoRouter = express.Router();

icoRouter.get(['/ico', '/ico*'], (req, res) => {
    res.render('ico');
});

module.exports = icoRouter;
