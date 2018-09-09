import express from 'express';
import { 
placeNewOrder
 } from  '../controller/userController';

const userRoutes = (app) => {



app.post("/api/v1/orders/orderId", placeNewOrder);


};

export default userRoutes;
