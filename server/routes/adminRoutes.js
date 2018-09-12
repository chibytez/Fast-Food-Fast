import express from "express";
import { getAllOrders,
    getSingleOrders,
    editAnOrder,
    deleteAnOrder,
    createNewOrder
  
} from "../controllers/adminController";


const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);
    app.get("/api/v1/allOrders/:id", getSingleOrders);
    app.put("/api/v1/allOrders/:id", editAnOrder);
    app.delete("/api/v1/allOrders/:id", deleteAnOrder);
    app.post("/api/v1/allOrders", createNewOrder);

};
export default adminRoutes;
