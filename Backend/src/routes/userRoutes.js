import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getUserProfile, loginUser, registerUser, updateUserProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", getUserProfile);
router.put("/profile/:id", updateUserProfile);
router.put("/profile", protect, updateProfile);


export default router;