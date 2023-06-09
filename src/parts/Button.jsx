export function Button({ label, type, wFull, onClick }) {
  return (
    <button
      className={`bg-neutral-950 px-4 py-3 rounded-md text-neutral-50 font-bold text-sm ${
        wFull && 'w-full'
      }`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
