import { Router } from 'express';
import TransactionSchema from '../../../app/models/TransactionModel';
import ContractSchema from '../../../app/models/ContractModel';

export default () => {
  const app = Router();

  app.post('/api/transaction', async (request, response) => {
    const username = 'anonymous';
    if (request.user) {
      username = request.user.username;
    }

    const contract = await ContractSchema.findOne({
      address: request.body.contractAddress,
    });

    const transaction = new TransactionSchema({
      sender: request.body.sender,
      receiver: request.body.receiver,
      amount: request.body.amount,
      txHash: request.body.txHash,
      contract,
      netname: request.body.netname,
      username,
    });

    transaction.save();
    response.end('transaction stored');
  });

  return app;
};
