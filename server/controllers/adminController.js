import { dbResults } from '../helper/utilities';

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
