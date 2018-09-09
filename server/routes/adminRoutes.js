import express from "express";
import { getAllOrders,
    getSingleOrders,
    editAnOrder
  
} from "../controllers/adminController";

const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);
    app.get("/api/v1/allOrders/orderId", getSingleOrders);
    app.put("/api/v1/allOrders/orderId", editAnOrder);

};
export default adminRoutes;
