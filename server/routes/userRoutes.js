import express from 'express';
import { 
getAllOrders,
getSingleOrders,
cancelAnOrder
 } from  '../controllers/userController';

const userRoutes = (app) => {



    app.get("/api/v1/orders", getAllOrders);
    app.get("/api/v1/orders/:id", getSingleOrders);
app.delete("/api/v1/allOrders/orderId", cancelAnOrder);



};

export default userRoutes;
