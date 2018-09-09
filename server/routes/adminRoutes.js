import express from "express";
import { getAllOrders,
    getSingleOrders
  
} from "../controllers/adminController";

const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);
    app.get("/api/v1/allOrders/orderId", getSingleOrders);

};
export default adminRoutes;
