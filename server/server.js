// server/server.js

import api from './api';
import passport from './middleware/passport';
import mongoose from './middleware/mongoose';
import config from './config/config';
const { resolve } = require('path');

require('dotenv').config();

const express = require('express');
const flash = require('connect-flash');
const app = express();

app.use(flash());
app.use(config());

app.use(mongoose());
app.use(passport());

// define the api requests
app.use(api());
// for all other requests, render index.html from the dist folder. ReactRouter handles the routing (app/containers/App/index)
app.get('*', (req, res) =>
  res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')),
);

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
