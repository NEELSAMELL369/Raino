import React, { createContext, useContext, useState, useEffect } from "react";
import {
  addCartService,
  GetCartService,
  removeCartService,
  clearCartService,
  updateCartService,
} from "../Services/CartServices";
import { checkOutService } from "../Services/OrderService";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await GetCartService();
      setCart(data);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to fetch cart");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      setLoading(true);
      const data = await addCartService(product);
      setCart(data);
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to add to cart");
      setLoading(false);
    }
  };
  
  const removeFromCart = async (productId) => {
    try {
      setLoading(true);
      const data = await removeCartService(productId); // call updated service
      setCart(data); // set updated cart
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to remove from cart");
      setLoading(false);
    }
  };

  const clearCart = async () => {
    try {
      setLoading(true);
      const data = await clearCartService();
      setCart(data.cart || { items: [], totalQuantity: 0, totalPrice: 0 });
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to clear cart");
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      setLoading(true);
      const updatedCart = await updateCartService(productId, quantity);
      setCart(updatedCart); // update context state
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to update quantity");
      setLoading(false);
    }
  };

  const checkout = async () => {
    try {
      setLoading(true);
      const data = await checkOutService();
      setCart({ items: [], totalQuantity: 0, totalPrice: 0 });
      setLoading(false);
      return data.order;
    } catch (err) {
      setError(err.message || "Checkout failed");
      setLoading(false);
      throw err;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        error,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity, // ✅ new function
        checkout,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
