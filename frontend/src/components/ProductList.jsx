import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products = [], loading }) {
  if (loading) return <p>Loading products...</p>;
  if (!products?.length) return <p>No products found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
