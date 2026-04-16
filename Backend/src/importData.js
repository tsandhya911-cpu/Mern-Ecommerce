import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "./data/products.js";
import connectDB from "./config/db.js";

console.log(products);

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await Product.deleteMany(); // purana delete
        await Product.insertMany(products, { ordered: false }); // naya insert

        console.log("Data Imported");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importData();