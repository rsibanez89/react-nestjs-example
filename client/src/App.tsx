import React, { useEffect, useState } from 'react';
import './App.css';
import { User } from '../../shared/contracts/users'
import { Table } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const users = await (
        await fetch("http://localhost:8080/users")
      ).json();
      console.log(users);
      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <div className="app">
     <h1>Administracion de usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
