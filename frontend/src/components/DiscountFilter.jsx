import DualSlider from "./DualSlider";

export default function DiscountFilter({ discountRange, onChange }) {
  return (
    <DualSlider
      label="Discount (%)"
      min={0}
      max={100}
      step={1}
      value={[discountRange.min || 0, discountRange.max || 100]}
      onChange={(vals) => onChange({ min: vals[0], max: vals[1] })}
    />
  );
}
