import { Router } from 'express';
import TransactionSchema from '../../../app/models/TransactionModel';

export default () => {
  const app = Router();

  app.get('/api/transaction/user/:uid', async (request, response) => {
    response.send(
      await TransactionSchema.find({ userID: request.params.uid }).exec(),
    );
  });

  app.get('/api/transaction/:txHash', async (request, response) => {
    const tx = await TransactionSchema.find({
      transactionHash: request.params.txHash,
    }).exec();
    console.log('tx found is ', tx);

    response.send({ name: 'test' });

    // response.send(
    //   await TransactionSchema.find({
    //     transactionHash: request.params.txHash,
    //   }).exec(),
    // );
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
