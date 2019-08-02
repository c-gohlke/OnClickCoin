import { Router } from 'express';

import postLogin from './post/login';
import postRegister from './post/register';
import postDeployContract from './post/deployContract';
import postTransaction from './post/transaction';
import postTransferToken from './post/transferToken';
import sendEmail from './post/sendEmail';

import getLogout from './get/logout';
import getTransactions from './get/transactions';
import getUsername from './get/username';
import getCurrentUser from './get/currentUser';

import deleteUser from './delete/user';

export default () => {
  const app = Router();

  app.use(postLogin());
  app.use(postRegister());
  app.use(postDeployContract());
  app.use(postTransferToken());
  app.use(postTransaction());
  app.use(sendEmail());

  app.use(getLogout());
  app.use(getTransactions());
  app.use(getCurrentUser());
  app.use(getUsername());

  app.use(deleteUser());

  return app;
};
