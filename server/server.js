// server/server.js

import api from './api';
import passport from './middleware/passport';
import mongoose from './middleware/mongoose';
import config from './config/config';

require('dotenv').config();

const express = require('express');
const flash = require('connect-flash');
const app = express();

app.use(flash());
app.use(config());
app.use(api());
app.use(mongoose());
app.use(passport());

app.listen(process.env.PORT || 3000, () => {
  console.log('server started');
});
