import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "./data/products.js"; //tumhara data file

dotenv.config();

await mongoose.connect("mongodb+srv://tsandhya911_db_user:ACHZppHfIfzCetwG@cluster0.iafgoku.mongodb.net/?appName=Cluster0");

const importData = async () => {
    try {
        await Product.deleteMany(); // clean old data
        await Product.insertMany(products); // insert new

        console.log("✅ Data Imported");
        process.exit();
    } catch (error) {
        console.error("❌ Error", error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Product.deleteMany();
        console.log("❌ Data Destroyed");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

// check command
if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}