import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from "./env.config.js";

export const accessToken = (userId) => {
    return jwt.sign(
        {userId},
        JWT_ACCESS_SECRET,
        {expiresIn: "30m"}
    );
};


export const refreshToken = (userId) => {
    return jwt.sign(
        {userId},
        JWT_REFRESH_SECRET,
        {expiresIn: "1d"}
    );
};


export const accessTokenVerify = (token) => {
    try {
        const decode = jwt.verify(token, JWT_ACCESS_SECRET);
        return decode; 
    } catch (error) {
        throw error
    }
}

export const refreshTokenVerify = (token) => {
    try {
        const decode = jwt.verify(token, JWT_REFRESH_SECRET);
        return decode;
    } catch (error) {
        throw error
    }
}