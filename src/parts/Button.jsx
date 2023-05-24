export function Button({ label, type }) {
  return (
    <button
      className={`bg-neutral-950 p-4 rounded-md text-neutral-50 font-bold text-sm w-full`}
      type={type}
    >
      {label}
    </button>
  );
}
