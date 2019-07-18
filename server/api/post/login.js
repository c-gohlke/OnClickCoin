import { Router } from 'express';
const passport = require('passport');

export default () => {
  const app = Router();

  app.post(
    '/login',
    passport.authenticate('local', {
      successRedirect: 'login',
      failureFlash: true,
    }),
  );

  return app;
};
