import {
  getAllOrders,
  getSingleOrders,
  makeAnOrder,
  cancelAnOrder,
} from '../controllers/userController';
import validator from '../helper/validateUser';

const userRoutes = (app) => {
  app.get('/api/v1/orders', validator, getAllOrders);
  app.get('/api/v1/orders/:id', validator, getSingleOrders);
  app.post('api/v1/orders', validator, makeAnOrder);
  app.delete('/api/v1/orders/:id', validator, cancelAnOrder);
};

export default userRoutes;
