import express from "express";
import { getAllOrders,
  
} from "../controllers/adminController";

const adminRoutes = app => {
    app.get("/api/v1/allOrders", getAllOrders);

};
export default adminRoutes;
