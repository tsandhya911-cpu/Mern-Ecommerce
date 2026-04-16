import express from "express";
import {
    createOrder,
    getOrderById,
    getOrders,
    markAsPaid,
    updateOrderStatus
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder); // 🔥 PROTECTED
router.get("/", protect, getOrders);   // 🔥 USER ORDERS ONLY
router.get("/:id", protect, getOrderById);

router.put("/:id/pay", protect, markAsPaid);
router.put("/:id/status", protect, updateOrderStatus);

export default router;