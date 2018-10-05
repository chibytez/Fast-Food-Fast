import express from 'express';

import { login, signUp, makeAdmin } from '../controllers/userController';

const auth = (app) => {
  app.post('/api/v1/auth/signup', signUp);

  app.post('/api/v1/auth/login', login);
  app.post('/api/v1/auth/makeAdmin', makeAdmin);
};

export default auth;
