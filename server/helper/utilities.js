import db from '../models/database';

export const restriction = (response) => {
  if (response.rows.length !== 0 && (response.rows[0].status === '1' || response.rows[0].status === '3')) {
    return true;
  }
};
export const dbResults = (sql, user, res) => {
  db.query(sql, (err, result) => {
    res.status(200)
      .json({
        user,
        result: result.rows,
      });
  });
};
