import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

export function PublicPage({ children }) {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/activities" replace={true} />;
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center px-4">
      <div className="w-full md:max-w-md">{children}</div>
    </div>
  );
}
