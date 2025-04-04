import express from "express";
import itemRoutes from "./routes/itemRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use("/api", itemRoutes);
app.use(errorHandler);

export default app;
