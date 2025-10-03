// src/components/BrandSelect.jsx


export default function BrandSelect({ brands, selectedBrand, onChange }) {
  return (
    <div>
      <label>Brand: </label>
      <select
        value={selectedBrand}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All Brands</option>
        {brands.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
