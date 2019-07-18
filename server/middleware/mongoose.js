import { Router } from 'express';
const mongoose = require('mongoose');

export default () => {
  const app = Router();

  const MongoURI = process.env.MONGOLAB_URI;
  mongoose.connect(MongoURI, { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function logDBConnection() {
    console.log('mongoose connected');
  });
  return app;
};
