import { useEffect } from 'react';

export function PublicPage({ children }) {
  useEffect(() => {
    console.log('public page');
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center px-4">
      <div className="w-full md:max-w-md">{children}</div>
    </div>
  );
}
