import {
} from '../controllers/userController';

import {
  placeOrder,
  getAllMeals,
  getAllUserOrders,
  cancelAnOrder,
} from '../controllers/orderController';

import validator from '../helper/validateUser';


const userRoutes = (app) => {
  app.post('/api/v1/users', placeOrder);
  app.get('/api/v1/users', getAllMeals);
  app.get('/api/v1/users/:userId/orders', getAllUserOrders);
  app.delete('/api/v1/users/:userId/:OrderId', cancelAnOrder);
};

export default userRoutes;
