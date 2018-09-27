import db from '../models/database';

const admin = {
  text: 'INSERT INTO users(email, first-name, password, admin) VALUES($1, $2, $3, $4 ) RETURNING id',
  values: ['admin@admin.com', 'admin', '$2b$10$REyb1K68lujoFHDiHJEeGeKS7BsLwNXw.gTe.0AEYQDEY2M4zSBSu', true],
};

db.query(admin, (err, res) => {
  if (err) {
    return err;
  }
  db.end();
});
