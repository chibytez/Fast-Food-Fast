import db from '../models/database';


db.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,email VARCHAR(40) NOT NULL,phonenumber INTEGER,Name VARCHAR(40) NOT NULL,  password VARCHAR(80), admin BOOLEAN NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});


db.query('CREATE TABLE IF NOT EXISTS orders(id SERIAL PRIMARY KEY NOT NULL, meal VARCHAR(40) NOT NULL , price INTEGER, user_email VAR(40) NOT NULL, option VARCHAR(20) NOT NULL , status VAR(20) NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});

db.query('CREATE TABLE IF NOT EXISTS meals(id SERIAL PRIMARY KEY NOT NULL, meal VARCHAR(40) NOT NULL, price INTEGER , edit BOOLEAN NOT NULL,delete BOOLEAN NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});
