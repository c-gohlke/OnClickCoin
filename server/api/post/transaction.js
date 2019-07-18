import { Router } from 'express';
import TransactionSchema from '../../../app/models/TransactionModel';

export default () => {
  const app = Router();

  app.post('/transaction', async (request, response) => {
    let userID = null;
    if (request.user) {
      userID = request.user._id;
    }

    const transaction = new TransactionSchema({
      transactionHash: request.body.transactionHash,
      name: request.body.name,
      symbol: request.body.symbol,
      decimals: request.body.decimals,
      supply: request.body.supply,
      sender: request.body.sender,
      receiver: request.body.receiver,
      contractAddress: request.body.contractAddress,
      netname: request.body.netname,
      userID,
    });

    transaction.save();
    response.end('transaction stored');
  });

  return app;
};
