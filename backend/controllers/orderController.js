import Cart from "../models/Cart.js";
import Order from "../models/Order.js";

// ✅ Checkout and create order
export const checkout = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate("items");
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    // create order
    const order = new Order({
      items: cart.items,
      totalQuantity: cart.totalQuantity,
      totalPrice: cart.totalPrice,
      status: "Pending",
    });
    await order.save();

    // clear cart
    cart.items = [];
    cart.totalQuantity = 0;
    cart.totalPrice = 0;
    await cart.save();

    res.json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("items");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
