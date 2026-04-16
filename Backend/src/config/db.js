
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected:", conn.connection.host); // better log
    } catch (error) {
        console.error("DB ERROR:", error.message); // REAL ERROR print hoga
         process.exit(1);
    }
};

export default connectDB;