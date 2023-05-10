import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import axios from "axios";

function Nav1() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieData, setMovieData] = useState(null);

  const handleMovieTitleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSearch = () => {
    const url = `http://localhost:8080/`;
    axios.get(url).then((response) => {
      setMovieData(response.data);
    });
  };
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">QA Cinema</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/screenings">Screenings</Nav.Link>
            <Nav.Link href="/discussion">Discussion</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex" type="submit" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={movieTitle}
              onChange={handleMovieTitleChange}
            />

            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;
