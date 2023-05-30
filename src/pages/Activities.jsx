import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrivatePage } from '../layout';
import { Button } from '../parts';

export function Activities() {
  return (
    <PrivatePage>
      <Heading />
      <List />
    </PrivatePage>
  );
}

function Heading() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-base">Activities</h1>
      <Button
        type="button"
        label="New activity"
        onClick={() => navigate('/activities/create')}
      />
    </div>
  );
}

function List() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch(import.meta.env.VITE_API_URL + '/activities', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    })
      .then((resp) => resp.json())
      .then((json) => {
        if (!ignore) {
          if (json !== null) {
            setActivities(json);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleDelete = (id) => {
    fetch(import.meta.env.VITE_API_URL + `/activities/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('access_token'),
      },
    })
      .then((resp) => {
        if (resp.ok) {
          const updState = activities.filter((a) => a.id !== id);
          setActivities(updState);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-10">
      {activities.map((a) => (
        <Item key={a.id} activity={a} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

function Item({ activity, handleDelete }) {
  return (
    <div className="p-4 border rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-sm">{activity.title}</h1>
        <div>
          <Button label="Delete" onClick={() => handleDelete(activity.id)} />
        </div>
      </div>
    </div>
  );
}
