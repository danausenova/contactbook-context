import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      style={{
        backgroundImage:
          "url(https://media.sketchfab.com/models/a80e2cb298024ceeaf194e2b7f27fbe0/thumbnails/30c33063766f4868877af104061e257a/f7294c77e5554d3cb944bddacb12f4f8.jpeg)",
      }}
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Contact book</Navbar.Brand>
        <Nav className="d-flex w-25 justify-content-between">
          <Nav.Link onClick={() => navigate("/")}>Contacts</Nav.Link>
          <Nav.Link onClick={() => navigate("/add")}>Add contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
