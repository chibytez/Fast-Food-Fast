import db from '../models/database';


db.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY, email VARCHAR(40) NOT NULL, phoneNumber INTEGER,Name VARCHAR(40) NOT NULL,password VARCHAR(80), admin BOOLEAN NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});


db.query('CREATE TABLE IF NOT EXISTS orders(id SERIAL PRIMARY KEY NOT NULL, user_id INTEGER, meal VARCHAR(40) NOT NULL, price INTEGER, option VARCHAR(20) NOT NULL, status VARCHAR(255) NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});

db.query('CREATE TABLE IF NOT EXISTS meals(id SERIAL PRIMARY KEY NOT NULL, meal_id INTEGER, meal VARCHAR(40) NOT NULL, price INTEGER )', (err, res) => {
  if (err) {
    return err;
  }
});
