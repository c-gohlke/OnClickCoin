import { Router } from 'express';
import UserSchema from '../../../app/models/UserModel';

// TODO: remove file?

export default () => {
  const app = Router();

  app.get('/api/username/:uid', async (request, response) => {
    try {
      const creator = await UserSchema.findOne({ _id: request.params.uid });
      response.send(creator.username);
    } catch {
      // no user found, most likely because no userID was specified or because corresponding user was deleted
      response.send('anonymous');
    }
  });

  return app;
};
