import { Router } from 'express';
const bodyParser = require('body-parser');
const session = require('express-session');
const express = require('express');
const { resolve } = require('path');

export default () => {
  const app = Router();

  app.use(express.static(resolve(__dirname, '..', '..', 'dist')));

  // all requests that are not of type /api/
  // app.get('/^((?!/api/).)*$/', (req, res) =>
  //   res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  // );

  app.get('/', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );
  app.get('data', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );
  app.get('feedback', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );
  app.get('receipt', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );
  app.get('receipt/*', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );
  app.get('login', (req, res) =>
    res.sendFile(resolve(__dirname, '..', '..', 'dist', 'index.html')),
  );

  /*













  */

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
