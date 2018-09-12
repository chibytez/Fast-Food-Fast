import express from "express";
import { getAllOrders,
    getSingleOrders,
    editAnOrder,
    deleteAnOrder,
    createNewItem
  
} from "../controllers/adminController";


const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);
    app.get("/api/v1/allOrders/:id", getSingleOrders);
    app.put("/api/v1/allOrders/orderId", editAnOrder);
    app.delete("/api/v1/allOrders/orderId", deleteAnOrder);
    app.post("/api/v1/allOrders/orderId", createNewItem);

};
export default adminRoutes;
