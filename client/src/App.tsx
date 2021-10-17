import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import AppUser from "./pages/AppUsers/AppUser";
import AppUsers from "./pages/AppUsers/AppUsers";

function NotFound() {
  return <h1>Not Found!</h1>
}

function App() {
  
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="ms-2"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="users">Usuarios</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Yo" id="basic-nav-dropdown" align="end">
                <NavDropdown.Item as={Link} to="me">Ver Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="logout">
                  Cerrar sesión
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="admin">Cerrar sesión</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
          <Route exact path="/" render={()=> (<h1>Home</h1>)} />
          <Route exact path="/users" component={AppUsers} />
          <Route path="/users/:userId" component={AppUser} />

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
