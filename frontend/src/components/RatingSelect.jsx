// src/components/RatingSelect.jsx
export default function RatingSelect({ selectedRating, onChange }) {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div>
      <label>Rating: </label>
      <select
        value={selectedRating}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All Ratings</option>
        {ratings.map((r) => (
          <option key={r} value={r}>
            {r} Stars
          </option>
        ))}
      </select>
    </div>
  );
}
