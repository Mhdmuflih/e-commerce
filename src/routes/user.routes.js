import { Router } from "express";
import { Login, register } from "../controller/user.controller.js";

const userRoutes = Router();

userRoutes.post('/register', register);
userRoutes.get("/login", Login)

export default userRoutes;