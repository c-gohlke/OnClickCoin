// server/server.js

import api from './api';
import routes from './routes';
import passport from './middleware/passport';
import mongoose from './middleware/mongoose';
import config from './config/config';
require('dotenv').config();

const express = require('express');
const path = require('path');
const flash = require('connect-flash');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(flash());
app.use(routes());
app.use(config());
app.use(mongoose());
app.use(passport());
app.use(api());

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
