import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link, useRouteMatch } from "react-router-dom";
import { User } from "../../../../shared/contracts/users";
import AppUser from "./AppUser";

function AppUsers() {
  let { path, url } = useRouteMatch<any>();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      const users = await (await fetch("http://localhost:8080/users")).json();
      console.log(users);
      setUsers(users);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <Container fluid className="my-3">
      <h1>Administracion de usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td><Link to={`${url}/${user.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
export default AppUsers;
