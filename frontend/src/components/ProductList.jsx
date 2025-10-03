// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products = [], loading }) {
  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products found</p>;

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
