import { Router } from 'express';
const passport = require('passport');
const User = require('../../../app/models/UserModel');

export default () => {
  const app = Router();

  app.post('/api/register', function register(req, res) {
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      err => {
        if (err) {
          console.log(err);
          return res.render('register');
        }
        passport.authenticate('local')(req, res, function redirect() {
          return res.redirect('/');
        });
        return res.end();
      },
    );
  });

  return app;
};
