import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export function PrivatePage({ children }) {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/" replace={true} />;
  }

  return <div>{children}</div>;
}
