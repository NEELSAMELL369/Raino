import express from "express";
import {
  addToCart,
  getCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
} from "../controllers/cartController.js";

const router = express.Router();

// POST → add product to cart
router.post("/add", addToCart);

// GET → get cart details
router.get("/", getCart);

router.put("/update", updateCartItemQuantity);

// DELETE → remove product from cart by productId
router.delete("/remove/:productId", removeFromCart);

// DELETE → clear full cart
router.delete("/clear", clearCart);

export default router;
