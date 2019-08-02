import { Router } from 'express';
import TransactionSchema from '../../../app/models/TransactionModel';

export default () => {
  const app = Router();

  app.get('/api/transaction/:txHash', async (request, response) => {
    response.send(
      await TransactionSchema.findOne({
        transactionHash: request.params.txHash,
      }).exec(),
    );
  });

  app.get('/api/transactions', async (request, response) => {
    response.send(
      await TransactionSchema.find()
        .sort({ createdAt: -1 })
        .limit(20)
        .exec(),
    );
  });

  return app;
};
