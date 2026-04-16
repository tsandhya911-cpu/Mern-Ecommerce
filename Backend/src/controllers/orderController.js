import Order from "../models/orderModel.js";
import mongoose from "mongoose";

export const createOrder = async (req, res) => {
    try {

        console.log("FULL BODY 👉", req.body);   // 🔥 ADD THIS
        console.log("SHIPPING 👉", req.body.shippingAddress); // 🔥 ADD THIS

        
        // 🔥 YAHI ADD KAR
        console.log("FULL BODY 👉", req.body);
        console.log("SHIPPING 👉", req.body.shippingAddress);
        console.log("HEADERS 👉", req.headers);


        const orderItems = req.body.orderItems;
        const totalPrice = req.body.totalPrice;
        const shippingAddress = req.body.shippingAddress;


        if (!orderItems || orderItems.length === 0) {
            return res.status(400).json({ message: "No items in order" });
        }

        const formattedItems = orderItems.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            image: item.image
        }));

        const order = new Order({
            user: req.user._id,
            shippingAddress: shippingAddress,  // 🔥 direct use
            orderItems: formattedItems,
            totalPrice,
        });
        const savedOrder = await order.save();

        // ✅ ONLY ONE RESPONSE
        res.status(201).json(savedOrder);

    } catch (error) {
        console.log("ORDER ERROR 👉", error);
        res.status(500).json({
            message: "Order Failed ❌",
            error: error.message
        });
    }
};

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id }) // 🔥 FIX
            .populate("user", "name email")
            .sort({ createdAt: -1 });

        res.json(orders);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to fetch orders" });
    }
};

// ✅ GET SINGLE ORDER
export const getOrderById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid Order ID" });
        }

        const order = await Order.findById(id)
            .populate("user", "name email");

        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: "Order not found" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ MARK AS PAID
export const markAsPaid = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.isPaid = true;
            await order.save();

            res.json({ message: "Payment Done ✅" });
        } else {
            res.status(404).json({ message: "Order not found" });
        }

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// ✅ UPDATE STATUS
export const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        order.status = req.body.status || order.status;

        const updated = await order.save();

        res.json(updated);

    } catch (error) {
        res.status(500).json({ message: "Error updating status" });
    }
};