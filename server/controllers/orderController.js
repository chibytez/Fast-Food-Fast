import Validator from 'validatorjs';

import db from '../models/database';

import { orderValidation } from '../helper/validation';
import { dbResults, restriction } from '../helper/utilities';


export const placeOrder = (req, res) => {
  const { user_id, email, meal, price, option, status } = req.body;
  const validation = new Validator({user_id, email, meal, price, option, status }, orderValidation);
  validation.setAttributeNames({meal: 'meal'});
  validation.passes(() => {
  const query = {
    text: 'INSERT INTO orders (user_id, email, meal, price, option, status) VALUES($1, $2, $3,$4,$5,$6) RETURNING id, user_id, email,meal,price ,option,status',
    values: [user_id, email, meal, price, option, status],
  };
  db.query(query)
    .then((order) => {
      res.status(201).json({
        success: true,
        message: 'order Successfully placed',
        order: order.rows,
      });
    });
    });
    validation.fails(() => {
      res.status(400)
        .send(validation.errors);
  });
};

export const getAllUserOrders = (req, res) => {
  const userId = req.userInfo;
  const sql = {
    text: 'SELECT * FROM orders WHERE user_id=$1',
    values: [userId],
  };
  dbResults(sql, req.userInfo, res);
};

export const getAllMeals = (req, res) => {
  const sql = 
     'SELECT * FROM meals';
     db.query(sql, (err, result) => {
      res.status(200)
      .json({
        status: true,
        message: result.rows,
      });
     });
};

export const cancelAnOrder = (req, res) => {
  const id = parseInt(req.params.orderId, 10);
  db.query('SELECT status FROM orders WHERE id=$1', [id], (err, response) => {
    // if (restriction(response)) {
    //   return res.status(409)
    //     .json({
    //       error: 'order already approved',
    //     });
    // }
    db.query('DELETE FROM orders WHERE id=$1', [id], (err, result) => {
      console.log('result', result);
  
      if (result.rowCount === 0) {
        console.log('row', result.rowCount);
        return res.status(404)
          .json({
            message: 'order Not found',
          });
      }
      res.status(200)
        .json({
          message: 'order deleted successfully',
        });
    });
  });
};