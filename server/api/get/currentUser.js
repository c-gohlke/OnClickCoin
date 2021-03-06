import { Router } from 'express';

export default () => {
  const app = Router();

  app.get('/api/currentUser', async (request, response) => {
    if (!request.user) {
      response.send('anonymous');
    } else {
      response.send(request.user.username);
    }
  });

  return app;
};
