import express from "express";
import dotenv from "dotenv";
import ProductRoutes from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("Welcome to Raino E-commerce Backend API");
});
app.use("/api", ProductRoutes);

export default app;
