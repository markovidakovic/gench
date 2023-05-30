import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../parts';
import { PublicPage } from '../layout';
import { useAuthDispatch } from '../hooks';

export function Login() {
  const dispatch = useAuthDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (email !== '' && password !== '') {
      const data = {
        email,
        password,
      };
      fetch(import.meta.env.VITE_API_URL + '/auth/tokens/access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((json) => {
          const { access_token, ...rest } = json;
          localStorage.setItem('access_token', access_token);
          dispatch({
            type: 'login',
            payload: rest,
          });
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <PublicPage>
      <div className="border rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Input
              type="password"
              id="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <Button label="Login" type="submit" wFull />
          </div>
        </form>
        <div className="mt-2 text-center">
          <Link to="/signup" className="hover:underline text-sm">
            Create a new account
          </Link>
        </div>
      </div>
    </PublicPage>
  );
}
