export function Input({ type, id, label, value, onChange }) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-sm inline-block">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="block border border-neutral-300 rounded p-2 text-sm focus:outline-none w-full"
      />
    </>
  );
}
