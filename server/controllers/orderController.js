import Validator from 'validatorjs';

import db from '../models/database';

import { orderValidation } from '../helper/validation';
import { dbResults, restriction } from '../helper/utilities';

export const placeOrder = (req, res) => {
  const { meal, price } = req.body;
  const validation = new Validator({ meal, price }, orderValidation);
  validation.setAttributeNames({ meal: '' });
  validation.passes(() => {
    const userId = req.userInfo.id;
    const getUserQuery = {
      text: `SELECT email, name, admin FROM users WHERE id=${userId}`,
    };
    db.query(getUserQuery, (err, result) => {
      const createOrderQuery = {
        text: 'INSERT INTO ' +
        'orderss(user_id, users_name, ' +
        'users_email, date, status, meal, price)' +
        ' VALUES($1, $2, $3, NOW() ,$4, $5, $6)',
        values: [userId, result.rows[0].name, result.rows[0].email,
          0, meal, price],
        db.query(createOrderQuery, (err, result) => {
    };
        res.status(201)
          .json({
            status: true,
            message: 'order placed successfully',
          });
      });
    });
  });
  validation.fails(() => {
    res.status(400)
      .send(validation.errors);
  });
};
