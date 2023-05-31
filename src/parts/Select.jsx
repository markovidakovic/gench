export function Select({ id, label, options, value, onChange }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm inline-block">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block border border-neutral-300 rounded p-2 text-sm focus:outline-none w-full bg-white"
      >
        <option value=""></option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </>
  );
}
