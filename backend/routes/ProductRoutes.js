import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.js";

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Mount products API
app.use("/api", productsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Raino E-commerce Backend API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
