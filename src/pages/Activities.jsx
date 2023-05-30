import { useEffect, useState } from 'react';
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
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-xl">Activities</h1>
      <Button type="button" label="New activity" />
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
          setActivities(json);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="py-10">
      {activities.map((a) => (
        <Item key={a.id} activity={a} />
      ))}
    </div>
  );
}

function Item({ activity }) {
  return (
    <div className="p-8 border rounded-md">
      <h1>{activity.title}</h1>
    </div>
  );
}
