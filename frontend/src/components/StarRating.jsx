import React from "react";

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, idx) => (
        <span key={idx}>★</span>
      ))}
      {halfStar && <span>☆</span>}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, idx) => (
        <span key={idx}>☆</span>
      ))}
    </div>
  );
}

