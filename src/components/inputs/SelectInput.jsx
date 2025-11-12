const SelectInput = ({ name, label, value, onInputChange, options }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <select
        type="select"
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onInputChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
