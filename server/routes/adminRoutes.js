import express from "express";
import { getAllOrders,
    getSingleOrders,
    editAnOrder,
    deleteAnOrder
  
} from "../controllers/adminController";

const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);
    app.get("/api/v1/allOrders/orderId", getSingleOrders);
    app.put("/api/v1/allOrders/orderId", editAnOrder);
    app.delete("/api/v1/allOrders/orderId", deleteAnOrder);

};
export default adminRoutes;
