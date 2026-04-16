
import User from "../models/User.js";
import jwt from "jsonwebtoken";


// Register new user
export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });

        if (userExists)
            return res.status(400).json({ message: "User already exists" });

        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "secretkey", { expiresIn: "7d" })
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && await user.matchPassword(password)) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,   // ✅ ADD THIS
                token: jwt.sign(
                    { id: user._id, isAdmin: user.isAdmin }, // ✅ ADD HERE ALSO
                    "secretkey",
                    { expiresIn: "7d" }
                )
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// GET user profile
export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) res.json(user);
        else res.status(404).json({ message: "User not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE user profile
export const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) user.password = req.body.password;

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE profile (for logged-in user)
export const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.address = req.body.address || user.address;
        user.profilePic = req.body.profilePic || user.profilePic;
        if (req.body.password) user.password = req.body.password;

        const updatedUser = await user.save();
        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            address: updatedUser.address,
            profilePic: updatedUser.profilePic,
            isAdmin: updatedUser.isAdmin // frontend ko admin info bhi mile
        });

    } catch (error) {
        console.log("UPDATE ERROR 👉", error);
        res.status(500).json({ message: "Update failed" });
    }
};