import mongoose from "mongoose";
import { mongoURL } from "./env.config.js";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(mongoURL, {dbName:"E-Commerce", minPoolSize:10, maxPoolSize: 100, serverSelectionTimeoutMS: 5000});
        console.log(`MongoDB Connection Successfull ${connect.connection.host}`);
    } catch (error) {
        console.log("Error connection database: ", error.message);
        process.exit();
    }
}