import { Router } from 'express';
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const { resolve } = require('path');

export default () => {
  const app = Router();

  app.use(express.static(resolve(__dirname, '..', '..', 'dist')));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(
    session({
      secret: 'somethingverysecret',
      resave: true,
      saveUninitialized: true,
    }),
  );
  app.use(express.urlencoded({ extended: true }));

  return app;
};
