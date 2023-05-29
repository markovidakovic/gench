import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth, useAuthDispatch } from './hooks';

let didInit = false;

function App() {
  const { fetching } = useAuth();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    if (!didInit) {
      const token = localStorage.getItem('access_token');
      if (token !== null) {
        fetch(import.meta.env.VITE_API_URL + '/auth/current', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          },
        })
          .then((resp) => resp.json())
          .then((json) => {
            dispatch({
              type: 'login',
              payload: json,
            });
          })
          .catch((err) => console.log(err));
      } else {
        dispatch({
          type: 'logout',
        });
      }
      didInit = true;
    }
  }, []);

  if (fetching) {
    return (
      <>
        <h1>Fetching</h1>
      </>
    );
  }

  return <Outlet />;
}

export default App;
