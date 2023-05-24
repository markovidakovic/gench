export function AuthPageLayout({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center items-center px-4">
      <div className="w-full md:max-w-md">{children}</div>
    </div>
  );
}
