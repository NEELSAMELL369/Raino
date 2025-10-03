import express from "express";
import {
  getDepartments,
  getCategoriesByDepartment,
  getProducts,
  getProductById,
  getBrands,
} from "../controllers/productController.js";

const router = express.Router();

// Departments
router.get("/departments", getDepartments);

// Categories by department
router.get("/departments/:department/categories", getCategoriesByDepartment);

// Brands by department (all categories in department)
router.get("/departments/:department/brands", getBrands);

// GET brands, optional query: ?department=Electronics&category=Mobiles
router.get("/brands", getBrands);

// Products by department & category (& optional brand via query param)
router.get(
  "/departments/:department/categories/:category/products",
  getProducts
);


// Single product by ID
router.get("/:id", getProductById);

export default router;
