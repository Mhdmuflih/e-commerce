import { passwordCompaire } from "../config/bcrypt.js";
import { accessToken, refreshToken } from "../config/jwt.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            throw new Error("all body data is required.");
        }

        const RegisteredUser = await User.findOne({ email: email });
        if (RegisteredUser) {
            res.json({ success: false, message: "user already registered!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User(
            {
                name: name,
                email: email,
                password: hashedPassword

            });
        await user.save();
        res.status(200).json({ success: true, message: "User registration successfull", user: user });
    } catch (error) {
        console.log("user registration error", error.message);
    }
}

export const Login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userData = await User.findOne({email: email});
        if(!userData) {
            res.json({success: false, message: "user record is not found!"});
        }
        
        const compairePassword = await bcrypt.compare(password, userData.password)
        // if(!compairePassword) {
        //     console.log("comapire or not ")
        //     res.json({success: false, message: "Password is not match"});
        // }
        
        const generateAccessToken = accessToken(userData._id);
        const generateRefreshToken = refreshToken(userData._id);

        res.status(200).json({success: true, message: "user login successfull", generateAccessToken, generateRefreshToken, userData});
    } catch (error) {
        console.log("user login error", error.message);
    }
}