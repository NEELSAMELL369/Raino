import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true }, // from productsData
    name: { type: String, required: true },
    price: { type: Number, required: true },
    priceAfterDiscount: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    image: { type: String },
    department: { type: String },
    category: { type: String },
  },
  { timestamps: true }
);

const CartItem = mongoose.model("CartItem", CartItemSchema);
export default CartItem;
