const TextAreaInput = ({ name, label, value, onInputChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default TextAreaInput;
