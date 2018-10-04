import bcrypt from 'bcrypt-nodejs';
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
      bcrypt.hash(password, null, null, (err, hash) => {
        const query = {
          text:
            'INSERT INTO users(email, name,phoneNumber, password, admin) VALUES($1, $2, $3, $4, $5 ) RETURNING *',
          values: [email, name, phoneNumber, hash, false],
        };
        user.query(query, (err, result) => {
          if (result.rowCount === 1) {
            tokenify(result, res);
          }
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
      if (result && result.rows.length === 1) {
        bcrypt.compare(password, result.rows[0].password, (error, match) => {
          if (match) {
            tokenify(result, res);
          } else {
            res
              .status(401)
              .json({
                errors: { message: ['Login Authentication failed'] },
              })
              .end();
          }
        });
      } else {
        res
          .status(401)
          .json({
            errors: { message: ['Login Authentication failed'] },
          })
          .end();
      }
    });
  });
  validation.fails(() => {
    res.status(400).json(validation.errors);
  });
};
