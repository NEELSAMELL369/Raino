import express from "express";
import {
  getDepartments,
  getCategoriesByDepartment,
  getProductsByCategory,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Get all departments
router.get("/departments", getDepartments);

// Get categories by department
router.get("/departments/:department/categories", getCategoriesByDepartment);

// Get products by department & category
router.get(
  "/departments/:department/categories/:category/products",
  getProductsByCategory
);

// Get single product by ID
router.get("/products/:id", getProductById);

export default router;
