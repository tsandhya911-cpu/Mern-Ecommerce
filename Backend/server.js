import express from "express";
import cors from "cors";
import orderRoutes from "./src/routes/orderRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import { connectDB } from "./src/config/db.js";
import contactRoutes from "./src/routes/contactRoutes.js";
import path from "path";
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const __dirname = path.resolve();

app.use("/images", express.static(path.join(__dirname, "public/images")));

// DB connect
connectDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => res.send("API is running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

