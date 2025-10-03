import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";

// Header.jsx
const Header = ({ onSearch }) => {
  const { cart } = useCart();

  const handleInputChange = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* App Name */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">Raino</Link>
        </div>

        {/* Search Box */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleInputChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cart & Auth */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FiShoppingCart size={24} />
            {cart.totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.totalQuantity}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
