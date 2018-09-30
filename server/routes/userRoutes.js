import {
  getAllOrders,
  makeAnOrder,
  cancelAnOrder,
} from '../controllers/userController';

import {
  placeOrder,
  // getSingleOrder,
  getAllUserOrders,
} from '../controllers/orderController';

import validator from '../helper/validateUser';


const userRoutes = (app) => {
  app.post('/api/v1/orders', placeOrder);
  app.get('/api/v1/orders', getAllOrders);
  app.get('/api/v1/users/:userId/orders', getAllUserOrders);
  app.post('/api/v1/orders', validator, makeAnOrder);
  app.delete('/api/v1/orders/:id', validator, cancelAnOrder);
};

export default userRoutes;
