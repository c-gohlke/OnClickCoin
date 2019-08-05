import { Router } from 'express';
import ContractSchema from '../../../app/models/ContractModel';

export default () => {
  const app = Router();

  app.get('/api/contract/:txHash', async (request, response) => {
    response.send(
      await ContractSchema.findOne({
        txHash: request.params.txHash,
      }).exec(),
    );
  });

  app.get('/api/contracts', async (request, response) => {
    if (request.user) {
      response.send(
        await ContractSchema.find({ username: request.user.username })
          .sort({ createdAt: -1 })
          .limit(20)
          .exec(),
      );
    } else {
      response.send(
        // TODO: return all
        await ContractSchema.find({ username: 'anonymous' })
          .sort({ createdAt: -1 })
          .limit(20)
          .exec(),
      );
    }
    response.end();
  });

  return app;
};
