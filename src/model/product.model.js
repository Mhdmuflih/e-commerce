import { model, Schema } from "mongoose";

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    }, 
    quandity: {
        type: String,
        required: true
    },
    desciption: {
        type: String,
        required: true
    },
    softDelete: {
        type: Boolean,
        default: false,
    }
});

export default model("Product", productSchema);