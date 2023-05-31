import { Button } from '../parts';
import { useAuthDispatch } from '../hooks';

export function Header() {
  const dispatch = useAuthDispatch();

  return (
    <div className="p-3 flex justify-between items-center">
      <h1>logo</h1>
      <Button label="Logout" onClick={() => dispatch({ type: 'logout' })} />
    </div>
  );
}
