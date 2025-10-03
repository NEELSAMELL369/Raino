import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { id, name, price, priceAfterDiscount, discount, images, rating } =
    product;

  const renderStars = (avgRating) => {
    const stars = [];
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++)
      stars.push(<span key={`full-${i}`}>★</span>);
    if (halfStar) stars.push(<span key="half">☆</span>);
    for (let i = 0; i < emptyStars; i++)
      stars.push(<span key={`empty-${i}`}>☆</span>);

    return stars;
  };

  const handleClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="border rounded-lg shadow p-4 w-64 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={images?.main}
        alt={name}
        className="w-full h-48 object-cover rounded-md"
      />

      <h3 className="mt-2 font-semibold text-lg">{name}</h3>

      <div className="flex items-center mt-1 text-sm">
        <span className="mr-2 font-medium text-gray-700">
          {rating?.average?.toFixed(1)}
        </span>
        <div className="text-yellow-500">
          {rating && renderStars(rating.average)}
        </div>
        <span className="text-gray-500 ml-2">({rating?.count || 0})</span>
      </div>

      <div className="mt-2">
        <span className="text-lg font-bold">
          ₹{priceAfterDiscount?.toLocaleString()}
        </span>
        <span className="text-gray-500 line-through ml-2">
          ₹{price?.toLocaleString()}
        </span>
        <span className="text-green-600 ml-2">({discount}% off)</span>
      </div>
    </div>
  );
}
