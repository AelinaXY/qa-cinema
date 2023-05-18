import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import axios from "axios";
import Screenings from "./Screenings.jsx";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useRef } from "react";

const filmsData = [
  {
    film_title: "Joker",
    film_year: 2019,
    film_rating: "15",
    film_genre: "Crime",
    film_secondary_genre: "Drama",
    film_poster:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    film_title: "Spider-Man: No Way Home",
    film_year: 2021,
    film_rating: "PG-13",
    film_genre: "Action",
    film_secondary_genre: "Adventure",
    film_poster:
      "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_7260.jpg?v=1640349274",
  },
  {
    film_title: "The Batman",
    film_year: 2022,
    film_rating: "PG-13",
    film_genre: "Action",
    film_secondary_genre: "Crime",
    film_poster:
      "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/TheBatman_VERT_MONTAGE_2764x4096_INTL-540359.jpg?v=1646430239",
  },
  {
    film_title: "Guardians of the Galaxy Vol. 3",
    film_year: 2023,
    film_rating: "PG-13",
    film_genre: "Action",
    film_secondary_genre: "Adventure",
    film_poster:
      "https://cdn.shopify.com/s/files/1/0037/8008/3782/products/IMG_0661-1_1024x1024@2x.jpg?v=1673620887",
  },
];

function Nav1() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const results = filmsData.filter((film) =>
      film.film_title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const loaded = useRef(false);
  const [userChoice, setUserChoice] = useState(0);

  const request = (url, setFunction) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
    console.log(`making request for at ${url}`);
    axios
      .get(url, config)
      .then((response) => {
        setFunction(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    if (loaded.current === false) {
      request("http://localhost:8080/films/", setData);
      loaded.current = true;
    }
  }, []);

  if (loaded) {
    console.log("NAV LOADED");
    if (error !== "") {
      console.log(error);
    } else if (data !== "") {
      console.log(data);
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
                <Nav.Link href="/screenings/navLink">Screenings</Nav.Link>
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
              <Form
                className="nav nav-colour"
                type="submit"
                placeholder="Search films here"
                style={{
                  color: "white",
                }}
                onSubmit={handleSearch}
              >
                <select
                  onChange={(choice) => setUserChoice(choice.target.value)}
                >
                  {data.map((f) => (
                    <option value={f.id}>
                      {f.film_title} {f.film_year}
                    </option>
                  ))}
                </select>
                <Link to={{ pathname: `/screenings/${userChoice}` }}>
                  <Button
                    className="search-btn"
                    variant="ptimary"
                    type="submit"
                  >
                    Find films here.
                  </Button>
                </Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  } else {
    console.log("NAV UNLOADeD");
  }
}

export default Nav1;
