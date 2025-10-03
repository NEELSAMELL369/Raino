export default function DepartmentSelect({ departments = [], selectedDept, onChange }) {
  return (
    <div>
      <label>Department: </label>
      <select value={selectedDept} onChange={(e) => onChange(e.target.value)}>
        <option value="all">All Departments</option>
        {departments.map((dep) => (
          <option key={dep.id || dep.name} value={dep.name}>
            {dep.name}
          </option>
        ))}
      </select>
    </div>
  );
}
