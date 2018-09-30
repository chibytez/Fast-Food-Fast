import { dbResults } from '../helper/utilities';

export const getAllOrders = (req, res) => {
  const sql = {
    text: 'SELECT * FROM orders ORDER BY date DESC',
  };
  dbResults(sql, req.userInfo, res);
};
