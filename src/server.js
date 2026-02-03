import app from "./app.js";
import { connectDB } from "./config/database.connection.js";
import { PORT } from "./config/env.config.js";

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running http://localhost:${PORT}`)
    })
};

startServer();