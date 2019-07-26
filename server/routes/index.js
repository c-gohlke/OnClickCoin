import { Router } from 'express';
const homeRouter = require('./homeRouter.js');
const contractReceiptRouter = require('./receiptRouter.js');
const sendRouter = require('./sendRouter.js');
const infoRouter = require('./infoRouter.js');
const dataRouter = require('./dataRouter.js');
const icoRouter = require('./icoRouter.js');
const loginRouter = require('./loginRouter.js');
const dashboardRouter = require('./dashboardRouter.js');
const feedbackRouter = require('./feedbackRouter.js');

export default () => {
  const app = Router();

  app.use(homeRouter);
  app.use(contractReceiptRouter);
  app.use(dataRouter);
  app.use(sendRouter);
  app.use(icoRouter);
  app.use(infoRouter);
  app.use(loginRouter);
  app.use(dashboardRouter);
  app.use(feedbackRouter);

  return app;
};
