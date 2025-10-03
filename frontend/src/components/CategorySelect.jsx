// src/components/CategorySelect.jsx
import React from "react";

export default function CategorySelect({ categories, selectedCat, onChange, loading }) {
  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <label>Category: </label>
      <select
        value={selectedCat}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All Categories</option>
        {categories?.map((cat) => (
          <option key={cat.id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
