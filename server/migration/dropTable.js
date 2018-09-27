import db from '../models/database';

db.query('DROP TABLE users', (err, res) => {
  if (err) {
    return err;
  }
});

db.query('DROP TABLE food_Items', (err, res) => {
  if (err) {
    return err;
  }
  db.end();
});

db.query('DROP TABLE orders', (err, res) => {
  if (err) {
    return err;
  }
  db.end();
});
