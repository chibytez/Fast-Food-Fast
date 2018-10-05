import db from '../models/database';

export const dbResults = (sql, user, res) => {
  db.query(sql, (err, result) => {
    return res.status(200)
      .json({
        user,
        result: result.rows,
      });
  });
};
