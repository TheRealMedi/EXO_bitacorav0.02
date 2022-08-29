import express from "express";
import morgan from "morgan";
//Routes
import languagesRoutes from "./routes/language.routes";
const app = express();

//settings
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));

// Using Routes
app.use("/api/languages", languagesRoutes);

export default app;
