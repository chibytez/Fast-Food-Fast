import express from 'express';
import { 
getAllOrders,
getSingleOrders,
makeAnOrder,
cancelAnOrder
 } from  '../controllers/userController';

const userRoutes = (app) => {



    app.get("/api/v1/orders", getAllOrders);
    app.get("/api/v1/orders/:id", getSingleOrders);
    app.post("api/v1/orders", makeAnOrder);
    app.delete("/api/v1/orders/:id", cancelAnOrder);

};

export default userRoutes;
