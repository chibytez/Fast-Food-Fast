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
