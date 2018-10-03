import db from '../models/database';
import bcrypt from 'bcrypt-nodejs';
require('dotenv').config();

const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD);

const admin = {
  text: 'INSERT INTO users(email, phoneNumber, name, password, admin) VALUES($1, $2, $3, $4, $5 ) RETURNING id',
  values: ['admin1@admin.com','5678844', 'admin', adminPassword, true],
};

db.query(admin, (err, res) => {
  if (err) {
    return err;
  }
  db.end();
});
