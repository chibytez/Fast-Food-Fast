import db from '../models/database';


const user = {
  text: 'INSERT INTO users(email, name, password, admin) VALUES($1, $2, $3, $4 ) RETURNING id',
  values: ['example@gmail.com', 'Example', '$2b$10$x0yAFrtQxs.f83ZKpb4iM.fwQlLAcc81GDhfDuFUimrNEqEDChXha', false],
};


db.query(user, (err, res) => {
  if (err) {
    return err;
  }
  const order = {
    text: 'INSERT INTO orders(user_id, users_name, users_email, date, status, meal, price) VALUES($1, $2, $3, NOW() ,$4, $5, $6) RETURNING id',
    values: [res.rows[0].id, 'example', 'example@gmail.com', 'pending', 'fried rice and chicken ', '#5000'],
  };
  db.query(order, (err, res) => {
    if (err) {
      return err;
    }
    const order2 = {
      text: 'INSERT INTO orders(user_id, users_name, users_email, date, status,  eal, price) VALUES($1, $2, $3, NOW() ,$4, $5, $6)',
      values: [res.rows[0].id, 'example', 'example@gmail.com', 'pending', 'egusi soup and semo', '#4500'],
    };
    db.query(order2, (err, res) => {
      if (err) {
        return err;
      }
      db.end();
    });
  });
});
