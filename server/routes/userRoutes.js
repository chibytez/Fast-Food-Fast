import express from 'express';
import { 
placeNewOrder,
getSingleOrders,
cancelAnOrder
 } from  '../controllers/userController';

const userRoutes = (app) => {



app.post("/api/v1/orders/orderId", placeNewOrder);
app.get("/api/v1/orders/orderId", getSingleOrders);
app.delete("/api/v1/allOrders/orderId", cancelAnOrder);


};

export default userRoutes;
