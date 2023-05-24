import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '../parts';
import { AuthPageLayout } from '../layout';

export function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <AuthPageLayout>
      <div className="border rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
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
          <div className="mt-6 text-left">
            <Link to="/" className="hover:underline text-sm">
              Back to login
            </Link>
          </div>
          <div className="mt-2">
            <Button label="Signup" type="submit" />
          </div>
        </form>
      </div>
    </AuthPageLayout>
  );
}
