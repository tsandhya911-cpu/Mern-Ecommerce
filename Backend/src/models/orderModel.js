
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    orderItems: [
        {
            name: String,
            qty: Number,
            image: String,
            price: Number,
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            }
        }
    ],

    shippingAddress: {
        name: String,
        phone: String,
        city: String,
        address: String
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    isPaid: {
        type: Boolean,
        default: false,
    },

    status: {
        type: String,
        enum: ["Pending", "Shipped", "Delivered"],
        default: "Pending"
    }

}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

export default Order;