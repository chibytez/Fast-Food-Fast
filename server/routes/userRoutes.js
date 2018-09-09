import express from 'express';
import { 
placeNewOrder,
getSingleOrders
 } from  '../controllers/userController';

const userRoutes = (app) => {



app.post("/api/v1/orders/orderId", placeNewOrder);
app.get("/api/v1/orders/orderId", getSingleOrders);


};

export default userRoutes;
