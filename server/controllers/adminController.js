import { dbResults } from '../helper/utilities';

import db from '../models/database';
import { dbResults, restriction } from '../helper/utilities';

export const getAllOrders = (req, res) => {
  const sql = {
    text: 'SELECT * FROM orders ORDER BY date DESC',
  };
  dbResults(sql, req.userInfo, res);
};

export const getSpecificOrder = (req, res) => {
  const id = parseInt(req.params.orderId, 10);
  const sql = {
    text: 'SELECT * FROM orders WHERE id=$1 ORDER BY date ASC',
    values: [id],
  };
  dbResults(sql, req.userInfo, res);
};

export const updateOrderStatus = (req, res) => {
  const id = parseInt(req.params.orderId, 10);
  const { action } = req.params;
  let sql = '';
  switch (action) {
    case 'new':
      sql = `UPDATE orders SET status=${1} WHERE id=${id} RETURNING *`;
      break;
    case 'processing':
      sql = `UPDATE orders SET status=${2} WHERE id=${id} RETURNING *`;
      break;
    case 'cancelled':
      sql = `UPDATE orders SET status=${3} WHERE id=${id} RETURNING *`;
      break;
    case 'complete':
      sql = `UPDATE orders SET status=${3} WHERE id=${id} RETURNING *`;
      break;
    default:
      sql = `UPDATE orders SET status=${0} WHERE id=${id} RETURNING *`;
      break;
  }
  dbResults(sql, req.userInfo, res);
};

export const addMealMenu = (req, res) => {
  const { id, meal, price } = req.body;
  const sql = {
    text: 'INSERT INTO meals(id, meal, price) VALUES($1, $2, $3) RETURNING id,meal , price',
    values: [id, meal, price],
  };
  db.sql(sql)
    .then((meals) => {
      res.status(201).json({
        success: true,
        message: 'meal Successfully added',
        meals: meals.rows,
      });
    }).catch(error => res.status(500).json({ message: error.message }));
  dbResults(sql, req.userInfo, res);
};

export const deleteMeal = (req, res) => {
  const id = parseInt(req.params.mealId, 10);
  db.query('SELECT status FROM meals WHERE id=$1', [id], (err, response) => {
    if (restriction(response)) {
      return res.status(409)
        .json({
          error: 'Request already approved',
        });
    }
    db.query('DELETE FROM meals WHERE id=$1', [id], (err, result) => {
      if (result.rowCount === 0) {
        return res.status(404)
          .json({
            message: 'meal Not found',
          });
      }
      res.status(200)
        .json({
          message: 'meal deleted successfully',
        });
    });
  });
};