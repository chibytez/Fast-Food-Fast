import {
  getSingleOrders,
  editAnOrder,
  deleteAnOrder,
  createNewOrder,
} from '../controllers/adminController';

import {
  getAllOrders,  
} from  '../controllers/adminController';
import validate from '../helper/validateAdmin';


const adminRoutes = (app) => {
  app.get('/api/v1/allOrders', getAllOrders);
  app.get('/api/v1/allOrders/:id', getSingleOrders);
  app.put('/api/v1/allOrders/:id', validate, editAnOrder);
  app.delete('/api/v1/allOrders/:id', validate, deleteAnOrder);
  app.post('/api/v1/allOrders', validate, createNewOrder);
};
export default adminRoutes;
