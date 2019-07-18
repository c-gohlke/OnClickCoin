import { Router } from 'express';
import TransactionSchema from '../../../app/models/TransactionModel';

export default () => {
  const app = Router();

  app.get('/transactions/:uid', async (request, response) => {
    response.send(
      await TransactionSchema.find({ userID: request.params.uid }).exec(),
    );
  });

  app.get('/transactions', async (request, response) => {
    response.send(
      await TransactionSchema.find()
        .sort({ createdAt: -1 })
        .limit(20)
        .exec(),
    );
  });

  return app;
};
