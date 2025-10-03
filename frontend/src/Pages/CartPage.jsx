import React from "react";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, checkout, updateQuantity, loading } = useCart();

  const handleCheckout = async () => {
    try {
      const order = await checkout(); // calls CartContext.checkout
      toast.success("Checkout successful!");
      console.log("Order details:", order); // optional: redirect to order page
    } catch (err) {
      toast.error(err.message || "Checkout failed");
    }
  };

  const handleIncrement = (item) => {
    updateQuantity(item.productId, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.productId, item.quantity - 1);
    } else {
      toast.error("Quantity cannot be less than 1");
    }
  };

  if (!cart.items || cart.items.length === 0)
    return <p className="p-4">Your cart is empty.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.items.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between mb-4 border-b pb-2"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain border rounded-md"
            />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">₹{item.priceAfterDiscount}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleDecrement(item)}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => handleIncrement(item)}
              className="px-2 py-1 bg-gray-200 rounded-md"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500 font-semibold"
          >
            Remove
          </button>
        </div>
      ))}

      <p className="font-bold mt-4 text-lg">
        Total: ₹{cart.totalPrice} ({cart.totalQuantity} items)
      </p>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md"
      >
        {loading ? "Processing..." : "Checkout"}
      </button>

      <button
        onClick={clearCart}
        className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-md"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;
