import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useProductById } from "../hooks/useCatalog";
import { useCart } from "../context/CartContext";
import Layout from "../components/Layout";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productId = parseInt(id, 10);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useProductById(productId);

  const [selectedImage, setSelectedImage] = useState(null);
  const [adding, setAdding] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  if (isLoading) return <div className="p-4">Loading product...</div>;
  if (isError)
    return (
      <div className="p-4">
        <p>Error: {error.message || "Something went wrong"}</p>
        <Link to="/" className="text-blue-500 underline">
          Back to Catalog
        </Link>
      </div>
    );
  if (!product)
    return (
      <div className="p-4">
        <h2>Product not found</h2>
        <Link to="/" className="text-blue-500 underline">
          Back to Catalog
        </Link>
      </div>
    );

  const handleAddToCart = async () => {
    try {
      setAdding(true);
      await addToCart(product);
      setSuccessMsg("Product added to cart!");
      setTimeout(() => setSuccessMsg(""), 2000); // clear message after 2s
      setAdding(false);
      // Do NOT navigate here
    } catch (err) {
      setAdding(false);
      alert(err.message || "Failed to add to cart");
    }
  };

  const handleBuyNow = async () => {
    try {
      setAdding(true);
      await addToCart(product); // ensure product is in cart
      setAdding(false);
      navigate("/cart"); // navigate to cart page
    } catch (err) {
      setAdding(false);
      alert(err.message || "Failed to proceed to buy");
    }
  };

  return (
    <Layout>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div>
          <img
            src={selectedImage || product.images?.main}
            alt={product.name}
            className="w-full h-[400px] object-contain border rounded-lg"
          />

          {product.images?.gallery && (
            <div className="flex gap-3 mt-4">
              {[product.images.main, ...product.images.gallery].map(
                (img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    className="w-20 h-20 object-contain border rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                    onClick={() => setSelectedImage(img)}
                  />
                )
              )}
            </div>
          )}
        </div>

        {/* Right Details Section */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.company}</p>

          <div className="mt-4">
            <p className="text-3xl font-bold text-red-600">₹{product.price}</p>
            {product.priceAfterDiscount && (
              <p className="text-green-600">
                After Discount: ₹{product.priceAfterDiscount}
              </p>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={adding}
            className={`mt-6 w-full ${
              adding
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-yellow-400 hover:bg-yellow-500"
            } text-black py-2 rounded-md font-semibold`}
          >
            {adding ? "Adding..." : "Add to Cart"}
          </button>

          {successMsg && (
            <p className="text-green-600 font-medium mt-2">{successMsg}</p>
          )}

          <button
            onClick={handleBuyNow}
            className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-semibold"
          >
            Buy Now
          </button>

          <Link to="/" className="text-blue-500 underline mt-4 block">
            Back to Catalog
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
