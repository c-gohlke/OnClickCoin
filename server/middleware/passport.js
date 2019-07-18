import { Router } from 'express';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('../../app/models/UserModel');

export default () => {
  const app = Router();

  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(
    session({
      secret: 'somethingverysecret',
      resave: true,
      saveUninitialized: true,
    }),
  );
  return app;
};
