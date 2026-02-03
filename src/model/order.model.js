import mongoose, { model, Schema } from "mongoose";

const orderSchema = new Schema({
    productId: {
        type: String
    },
    productName: {
        type: String
    },
    userId: {
        type: String
    },
    userName: {
        type: String
    },
    paymentMethod: {
        type: String
    },

}, {timestamps: true});

export default model("order", orderSchema);