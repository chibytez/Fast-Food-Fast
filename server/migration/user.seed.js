import db from '../models/database';

import bcrypt from 'bcrypt-nodejs';
require('dotenv').config();

const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD);

const user = {
  text: 'INSERT INTO users(email, name, phoneNumber, password, admin) VALUES($1, $2, $3, $4 ,$5) RETURNING id',
  values: ['example@gmail.com', 'Example', '123456', adminPassword , false],
};


db.query(user, (err, res) => {
  if (err) {
    return err;
  }
  const user2 = {
    text: 'INSERT INTO users(email, name, phoneNumber, password, admin) VALUES($1, $2, $3, $4, $5) RETURNING id',
    values: ['examples1@gmail.com', 'example','45666543', adminPassword, false],
  };
  db.query(user2, (err, res) => {
    if (err) {
      return err;
    }
    const order = {
      text: 'INSERT INTO orders( user_id, meal, price, option, status) VALUES($1, $2, $3,$4, $5, $6)',
      values: [res.rows[0].id, 'pizza', 3000, 'accept', 'processing'],
    };
    db.query(order, (err, res) => {
      if (err) {
        return err;
      }
    });
  });
});
