import {
  cancelAnOrder
} from '../controllers/userController';

import {
  placeOrder,
  getAllMeals,
  getAllUserOrders,
} from '../controllers/orderController';

import validator from '../helper/validateUser';


const userRoutes = (app) => {
  app.post('/api/v1/orders', placeOrder);
  app.get('/api/v1/orders', getAllMeals);
  app.get('/api/v1/users/:userId/orders', getAllUserOrders);
  app.delete('/api/v1/orders/:id', validator, cancelAnOrder);
};

export default userRoutes;
