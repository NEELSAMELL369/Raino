import DualSlider from "./DualSlider";

export default function PriceFilter({ priceRange, onChange }) {
  return (
    <DualSlider
      label="Price (₹)"
      min={0}
      max={200000}
      step={1000}
      value={[priceRange.min || 0, priceRange.max || 200000]}
      onChange={(vals) => onChange({ min: vals[0], max: vals[1] })}
    />
  );
}