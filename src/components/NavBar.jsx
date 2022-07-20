import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../sass/NavBar.scss";

const NavBar = ({ toggleTheme }) => {
  const isDarkTheme = localStorage.getItem("theme");
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={isDarkTheme === "dark" ? "dark" : "primary"}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">Team Chavez</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create-user">Crear Usuario</Nav.Link>
              <button
                type="button"
                className="btn btn-link nav-button"
                onClick={toggleTheme}
              >
                {isDarkTheme === "dark" ? (
                  <span aria-label="Light mode" role="img">
                    🌞
                  </span>
                ) : (
                  <span aria-label="Dark mode" role="img">
                    🌜
                  </span>
                )}
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default NavBar;
