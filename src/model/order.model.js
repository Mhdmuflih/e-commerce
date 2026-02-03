import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    totalPrice: Number,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Purchase", purchaseSchema);
