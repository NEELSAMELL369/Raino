import express from "express";
import { checkout, getOrders } from "../controllers/orderController.js";

const router = express.Router();

// POST → checkout and create order
router.post("/checkout", checkout);

// GET → get all orders
router.get("/", getOrders);

export default router;
