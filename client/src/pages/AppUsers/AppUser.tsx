import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { User } from "../../../../shared/contracts/users";
import { UserSchema } from "../../../../shared/contracts/users.schema";

function AppUser() {
  const { userId } = useParams<any>();
  const [user, setUser] = useState<User | undefined>();
  const [isLoading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const user = await (
        await fetch(`http://localhost:8080/users/${userId}`)
      ).json();
      console.log(user);
      setUser(user);
      setLoading(false);
    }

    fetchUser();
  }, [userId]);

  if (user == null) {
    return <p>Not found!</p>;
  }

  async function updateUser() {
    setLoading(true);
    const reponse = await (
      await fetch(`http://localhost:8080/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
    ).json();
    console.log(user);
    setUser(user);
    setLoading(false);
  }

  async function validateField() {
    const { error, value } = UserSchema.validate(user);
    if (error) {
      console.log(error);
    }
    return value;
  }

  return (
    <Container>
      <h1>UserId: {user.id}</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            onBlur={(e) => validateField()}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={updateUser}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default AppUser;
