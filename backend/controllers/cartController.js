import Cart from "../models/Cart.js";
import CartItem from "../models/CartItem.js";

// ✅ Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { product } = req.body;

    let cart = await Cart.findOne().populate("items");
    if (!cart) {
      cart = new Cart({ items: [], totalQuantity: 0, totalPrice: 0 });
    }

    let existingItem = cart.items.find(
      (item) => item.productId === product.productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
    } else {
      const newItem = await CartItem.create({
        productId: product.productId,
        name: product.name,
        price: product.price,
        priceAfterDiscount: product.priceAfterDiscount,
        quantity: 1,
        image: product.image,
        department: product.department,
        category: product.category,
      });
      cart.items.push(newItem._id);
    }

    await cart.save();

    // ✅ Populate items and recalc totals before sending response
    const populatedCart = await Cart.findById(cart._id).populate("items");

    populatedCart.totalQuantity = populatedCart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    populatedCart.totalPrice = populatedCart.items.reduce(
      (sum, item) => sum + item.priceAfterDiscount * item.quantity,
      0
    );

    await populatedCart.save();

    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Get cart
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate("items");
    if (!cart) return res.json({ items: [], totalQuantity: 0, totalPrice: 0 });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update quantity of a cart item
export const updateCartItemQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    if (!productId)
      return res.status(400).json({ error: "ProductId is required" });
    if (!quantity || quantity < 1)
      return res.status(400).json({ error: "Quantity must be at least 1" });

    let cart = await Cart.findOne().populate("items");
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    // Ensure proper type matching
    const item = cart.items.find(
      (i) => String(i.productId) === String(productId)
    );

    if (!item) return res.status(404).json({ error: "Item not found in cart" });

    item.quantity = quantity;
    await item.save();

    // recalc totals safely
    cart.totalQuantity = cart.items.reduce(
      (sum, i) => sum + (i.quantity || 0),
      0
    );
    cart.totalPrice = cart.items.reduce(
      (sum, i) => sum + (i.priceAfterDiscount || 0) * (i.quantity || 0),
      0
    );

    await cart.save();

    const updatedCart = await Cart.findById(cart._id).populate("items");
    res.json(updatedCart);
  } catch (err) {
    console.error("Update Cart Error:", err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ Remove product from cart
export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    let cart = await Cart.findOne().populate("items");
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    // find and remove item
    const itemIndex = cart.items.findIndex(
      (item) => item.productId == productId
    );
    if (itemIndex === -1)
      return res.status(404).json({ error: "Item not in cart" });

    const item = cart.items[itemIndex];
    await CartItem.findByIdAndDelete(item._id);
    cart.items.splice(itemIndex, 1);

    await cart.save();

    // ✅ Populate items again after removal
    const populatedCart = await Cart.findById(cart._id).populate("items");

    populatedCart.totalQuantity = populatedCart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    populatedCart.totalPrice = populatedCart.items.reduce(
      (sum, item) => sum + item.priceAfterDiscount * item.quantity,
      0
    );

    await populatedCart.save();

    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Clear cart
export const clearCart = async (req, res) => {
  try {
    let cart = await Cart.findOne();
    if (!cart) return res.json({ message: "Cart already empty" });

    // delete all cart items from collection
    await CartItem.deleteMany({ _id: { $in: cart.items } });

    // reset cart
    cart.items = [];
    cart.totalQuantity = 0;
    cart.totalPrice = 0;

    await cart.save();

    // return proper cart structure
    const clearedCart = await Cart.findById(cart._id).populate("items");
    res.json({ message: "Cart cleared", cart: clearedCart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
