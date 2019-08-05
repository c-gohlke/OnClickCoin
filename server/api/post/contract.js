import { Router } from 'express';
import ContractSchema from '../../../app/models/ContractModel';

export default () => {
  const app = Router();

  app.post('/api/contract', async (request, response) => {
    let username = null;
    if (request.user) {
      username = request.user.username;
    }

    const contract = new ContractSchema({
      txHash: request.body.txHash,
      name: request.body.name,
      symbol: request.body.symbol,
      decimals: request.body.decimals,
      supply: request.body.supply,
      sender: request.body.sender,
      address: request.body.address,
      netname: request.body.netname,
      username,
    });

    contract.save();
    response.end('contract stored');
  });

  return app;
};
