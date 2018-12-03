import isAdmin from '../middleware/isAdmin';
import {
  getAllOrders,
  getSpecificOrder,
  updateOrderStatus,
  addMealMenu,
  deleteMeal,
} from '../controllers/adminController';

import userAuth from '../middleware/userAuth';
import verifyToken from '../middleware/verifyToken';


const adminRoutes = (app) => {
  app.get('/api/v1/orders', verifyToken, isAdmin, getAllOrders);
  app.get('/api/v1/orders/:orderId', verifyToken, userAuth, isAdmin, getSpecificOrder);
  app.put('/api/v1/orders/:orderId/:action', verifyToken, userAuth, isAdmin, updateOrderStatus);
  app.delete('/api/v1/orders/:mealId', verifyToken, userAuth, isAdmin, deleteMeal);
  app.post('/api/v1/menu', addMealMenu);
};
export default adminRoutes;
