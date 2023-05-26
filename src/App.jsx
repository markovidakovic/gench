import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      console.log(localStorage.getItem('access_token'));
      didInit = true;
    }
  }, []);

  return <Outlet />;
}

export default App;
