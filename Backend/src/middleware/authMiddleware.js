import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, "secretkey");

      req.user = await User.findById(decoded.id).select("-password");

      return next(); // IMPORTANT
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  return res.status(401).json({ message: "Not authorized, no token" }); // return lagao
};


// ADMIN CHECK
export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); //allow
  } else {
    res.status(403).json({ message: "Admin only" });
  }
};