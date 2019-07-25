import { Router } from 'express';

export default () => {
  const app = Router();

  app.get('/logout', (request, response) => {
    request.logout();
    response.send('/');
  });

  return app;
};
