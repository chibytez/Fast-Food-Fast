import { validatePlaceOrder } from '../helper/validation';
import {
  placeOrder,
  getAllMeals,
  getAllUserOrders,
  cancelAnOrder,
} from '../controllers/orderController';

import verifyToken from '../middleware/verifyToken';

import userAuth from '../middleware/userAuth';


const userRoutes = (app) => {
  app.post('/api/v1/orders', verifyToken, userAuth, validatePlaceOrder, placeOrder);
  app.get('/api/v1/menu', getAllMeals);
  app.get('/api/v1/users/:userId/orders', verifyToken, userAuth, getAllUserOrders);
  app.delete('/api/v1/users/:userId/:orderId', verifyToken, userAuth, cancelAnOrder);
};

export default userRoutes;
