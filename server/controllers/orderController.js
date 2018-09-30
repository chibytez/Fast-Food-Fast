// import Validator from 'validatorjs';

// import db from '../models/database';

// import { orderValidation } from '../helper/validation';
// import { dbResults, restriction } from '../helper/utilities';

// export const getAllUserOrders = (req, res) => {
//     const userId = req.userInfo.id;
//     const sql = {
//       text: 'SELECT * FROM requests WHERE user_id=$1 ORDER BY id ASC',
//       values: [userId],
//     };
//     dbResults(sql, req.userInfo, res);
//   };
