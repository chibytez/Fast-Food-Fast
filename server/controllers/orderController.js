import db from '../models/database';
import { dbResults } from '../helper/utilities';


export const placeOrder = (req, res) => {
  const { 
user_id, email, meal, price, option, status 
} = req.body;
  const query = {
    text: 'INSERT INTO orders ( user_id, meal, price, option, status) VALUES( $1, $2, $3, $4, $5) RETURNING id, user_id,meal,price ,option, status',
    values: [user_id, meal, price, option, status],
  };
  db.query(query)
    .then((order) => res.status(201).json({
        success: true,
        message: 'order Successfully placed',
        order: order.rows, 
      }))
    .catch((error) => error);
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
  const sql =      'SELECT * FROM meals';
  db.query(sql, (err, result) => res.status(200)
      .json({
        status: true,
        message: result.rows,
      }));
};

export const cancelAnOrder = (req, res) => {
  const id = parseInt(req.params.orderId, 10);
  db.query('SELECT status FROM orders WHERE id=$1', [id], (err, response) => {
    db.query('DELETE FROM orders WHERE id=$1', [id], (err, result) => {
      if (result.rowCount === 0) {
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
