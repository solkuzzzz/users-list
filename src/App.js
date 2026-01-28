import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/users.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setUsers(json.data);
      }).catch(err => {
        console.warn(err);
        alert('Ошибка при получении пользователей: ' + err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;