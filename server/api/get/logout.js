import { Router } from 'express';

export default () => {
  const app = Router();

  app.get('api/logout', (request, response) => {
    request.logout();
    response.send('/');
  });

  return app;
};
