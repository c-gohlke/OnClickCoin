import { Router } from 'express';

export default () => {
  const app = Router();

  app.get('/logout', (request, response) => {
    request.logout();
    response.redirect('/');
  });

  return app;
};
