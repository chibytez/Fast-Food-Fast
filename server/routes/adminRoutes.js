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
  app.get('/api/v1/allOrders',verifyToken, isAdmin, getAllOrders);
  app.get('/api/v1/allOrders/:orderId',verifyToken, userAuth, isAdmin, getSpecificOrder);
  app.put('/api/v1/allOrders/:orderId/:action',verifyToken, userAuth, isAdmin, updateOrderStatus);
  app.delete('/api/v1/allOrders/:mealId', verifyToken, userAuth, isAdmin, deleteMeal);
  app.post('/api/v1/allOrders', verifyToken, userAuth, isAdmin, addMealMenu);
};
export default adminRoutes;
