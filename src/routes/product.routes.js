import { Router } from "express";
import { protect } from "../middleware/auth.middleware.js";
import { CreateProduct, deleteProduct, getProduct, softDelete, updateProduct } from "../controller/product.controller.js";

const productRoutes = Router();

productRoutes.post("/", CreateProduct)
productRoutes.get("/", getProduct);
productRoutes.put("/", updateProduct);
productRoutes.delete("/", deleteProduct);
productRoutes.patch("/", softDelete);

export default productRoutes;