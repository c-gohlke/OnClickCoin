import { Router } from 'express';
import UserSchema from '../../../app/models/UserModel';

export default () => {
  const app = Router();

  app.delete('/api/user/:id', async (request, response) => {
    try {
      const result = await UserSchema.deleteOne({
        _id: request.params.id,
      }).exec();
      response.send(result);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  return app;
};
