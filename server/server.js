// server/server.js

import api from './api';
import passport from './middleware/passport';
import mongoose from './middleware/mongoose';
import routes from './routes';
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(flash());
app.use(api());
app.use(mongoose());
app.use(passport());
app.use(routes());

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
