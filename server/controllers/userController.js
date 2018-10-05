import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Validator from 'validatorjs';

import { signUpValidation, loginValidation } from '../helper/validation';

import user from '../models/database';

const tokenGen = result => jwt.sign(
  {
    id: result.rows[0].id,
    admin: result.rows[0].admin,
  },
  process.env.JWT_KEY,
  {
    expiresIn: '1h',
  },
);

const tokenify = (result, res) => {
  const token = tokenGen(result);
  res
    .status(200)
    .json({
      auth: jwt.decode(token),
      token,
    })
    .end();
};

export const signUp = (req, res) => {
  const {
    name, phoneNumber, email, password,
  } = req.body;
  const validation = new Validator({
    name, phoneNumber, password, email,
  }, signUpValidation);
  validation.passes(() => {
    const sql = {
      text: 'SELECT * FROM users WHERE email= $1',
      values: [email],
    };
    user.query(sql, (err, result) => {
      if (result.rows.length > 0) {
        return res.status(409).json({
          errors: {
            message: ['Email already exists'],
          },
        });
      }
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          const query = {
            text:
              'INSERT INTO users(email, name,phoneNumber, password, admin) VALUES($1, $2, $3, $4, $5 ) RETURNING email, name,phoneNumber, admin',
            values: [email, name, phoneNumber, hash, false],
          };
          user.query(query)
            .then(data => jwt.sign({ user: data.rows[0].id }, process.env.JWT_KEY, (err, token) => res.status(201).json({
              success: true,
              message: 'user registration was successful',
              name: data.rows[0].name,
              data: data.rows[0],
              token,
            })))
            .catch(error => res.status(500).json({ message: error.message }));
        });
      });
    });
  });
  validation.fails(() => {
    res.status(400).json(validation.errors);
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const validation = new Validator({ password, email }, loginValidation);
  validation.passes(() => {
    const sql = {
      text: 'SELECT * FROM users WHERE email= $1',
      values: [email],
    };
    user.query(sql)
      .then((result) => {
        if (result && result.rows.length === 1) {
          bcrypt.compare(password, result.rows[0].password, (error, match) => {
            if (match) {
              if (result && result.rows.length === 1) {
                delete result.rows[0].password;
                jwt.sign({ user: result.rows[0].id }, process.env.JWT_KEY, (err, token) => res.status(201).json({
                  success: true,
                  message: 'user successful login',
                  name: result.rows[0].name,
                  data: result.rows[0],
                  token,
                }));
              } else {
                res.status(400).json({
                  success: false,
                  message: 'Your email or password is incorrect',
                });
              }
            }
          });
        }
      })
      .catch(error => res.status(500).json({ message: error.message }));
  });
  validation.fails(() => {
    res.status(400).json(validation.errors);
  });
};

export const makeAdmin = (req, res) => {
  const { email } = req.body;
  const admin = true;
  const query = {
    text: 'UPDATE users SET admin = ($1) WHERE email = ($2) RETURNING *',
    values: [admin, email],
  };
  user.query(query)
    .then((result) => {
      if (result.rowCount === 1) {
        return res.status(200).json({
          success: true,
          message: 'updated to admin',
          entry: result.rows,
        });
      }
      return res.status(404).json({
        success: false,
        message: 'user not found',
      });
    })
    .catch(error => res.status(500).json({ message: error.message }));
};
