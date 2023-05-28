import { useEffect } from 'react';

export function PrivatePage({ children }) {
  useEffect(() => {
    console.log('private page');
  }, []);

  return <div>{children}</div>;
}
