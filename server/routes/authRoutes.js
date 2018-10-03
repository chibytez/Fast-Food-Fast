import express from 'express';

import { login, signUp } from '../controllers/userController';

const auth = (app) => {

app.post('/auth/signup', signUp);

app.post('/auth/login', login);

};

export default auth;
