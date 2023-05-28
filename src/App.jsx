import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      const token = localStorage.getItem('access_token');
      if (token !== null) {
        console.log(token);
      }
      didInit = true;
    }
  }, []);

  return <Outlet />;
}

export default App;
