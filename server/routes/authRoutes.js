import express from 'express';

import { login, signUp } from '../controllers/userController';

const auth = (app) => {
  app.post('/api/v1/auth/signup', signUp);

  app.post('/api/v1/auth/login', login);
};

export default auth;
