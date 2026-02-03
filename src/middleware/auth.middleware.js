import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from "../config/env.config.js";

export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json("No Token");
    }
    try {
        const decode = jwt.verify(token, JWT_ACCESS_SECRET);
        req.headers["x-user-id"] = decode.userId;
    } catch (error) {
        console.log("protect part error", error.message);
    }
}