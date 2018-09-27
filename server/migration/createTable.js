import db from '../models/database';


db.query('CREATE TABLE IF NOT EXISTS users(id SERIAL PRIMARY KEY,fullName VARCHAR(40) NOT NULL, email VARCHAR(40) NOT NULL, password VARCHAR(80), admin BOOLEAN NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});


db.query('CREATE TABLE IF NOT EXISTS foodItems(id SERIAL PRIMARY KEY NOT NULL, food_Name VARCHAR(40) NOT NULL , image BYTEA, price INTEGER, date timestamp without time zone)', (err, res) => {
  if (err) {
    return err;
  }
});

db.query('CREATE TABLE IF NOT EXISTS foodItems(id SERIAL PRIMARY KEY NOT NULL,quantity INTEGER, accept BOOLEAN NOT NULL,decline BOOLEAN NOT NULL, complete BOOLEAN NOT NULL, date timestamp without time zone, status VARCHAR(20) NOT NULL)', (err, res) => {
  if (err) {
    return err;
  }
});
