// src/components/DualSlider.jsx
import { useState, useEffect } from "react";
import { Range } from "react-range";

export default function DualSlider({
  label,
  min,
  max,
  step = 1,
  value = [min, max],
  onChange,
}) {
  const [values, setValues] = useState(value);

  useEffect(() => {
    setValues(value); // update internal state if parent changes
  }, [value]);

  const handleChange = (vals) => {
    setValues(vals);
    onChange(vals); // return array [min, max]
  };

  return (
    <div style={{ margin: "15px 0" }}>
      <label>
        {label}: {values[0]} - {values[1]}
      </label>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={handleChange}
        renderTrack={({ props, children }) => {
          const { key, ...restProps } = props; // separate key
          return (
            <div
              key={key}
              {...restProps}
              style={{
                ...restProps.style,
                height: "6px",
                width: "100%",
                backgroundColor: "#ddd",
                borderRadius: "3px",
                marginTop: "10px",
              }}
            >
              {children}
            </div>
          );
        }}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props; // separate key
          return (
            <div
              key={key}
              {...restProps}
              style={{
                ...restProps.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#007bff",
                borderRadius: "50%",
              }}
            />
          );
        }}
      />
    </div>
  );
}
