import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivatePage } from '../layout';
import { Input, Button, Select } from '../parts';

export function CreateActivity() {
  return (
    <PrivatePage>
      <Heading />
      <Form />
    </PrivatePage>
  );
}

function Heading() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-base">Create a new activity</h1>
      <Button label="Back" onClick={() => navigate('/activities')} />
    </div>
  );
}

function Form() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [types, setTypes] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(import.meta.env.VITE_API_URL + '/activities/types', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (!ignore) {
          if (json !== null) {
            setTypes(json.map((t) => ({ label: t.title, value: t.id })));
          }
        }
      })
      .catch((err) => console.log(err));

    return () => {
      ignore = true;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && type !== '') {
      const data = {
        title,
        type_id: parseInt(type, 10),
      };

      fetch(import.meta.env.VITE_API_URL + '/activities', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then(() => {
          navigate('/activities');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="py-10">
      <div>
        <Input
          id="title"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <Select
          id="typeId"
          label="Type"
          options={types}
          value={type}
          onChange={(value) => setType(value)}
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-end">
          <Button label="Create" type="submit" />
        </div>
      </div>
    </form>
  );
}
