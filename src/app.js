import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes)
app.use("/api/order", orderRoutes);

export default app;