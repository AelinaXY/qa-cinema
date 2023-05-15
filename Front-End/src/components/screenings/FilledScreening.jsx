import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import arrayChunk from "../functions/arrayChunk";
import dateParseFromDB from "../functions/dateParseFromDB";
import Modal from 'react-bootstrap/Modal';

const FilledScreening = ({ films, selectedFilm }) => {

  // const [selectedFilmId, setSelectedFilmId] = useState(0);
  console.log("IN FILLED SCREENING PAGE");
  console.log(films);
  console.log(selectedFilm);


  //Get All Showings
  const [showingData, setShowingData] = useState([]);
  const [error, setError] = useState("");
  const loaded = useRef(false);

  //Modal stuff
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const request = ((url, setFunction, filmTitle, filmId) => {
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

  })

  useEffect(() => {
    if (loaded.current === false) {
      request(`http://localhost:8080/showings/allFilms/0`, setShowingData);

      loaded.current = true
    }

  }, []);


  //Film Cards
  const chunkedFilms = arrayChunk(films, 3);
  const printArray = [];

  chunkedFilms.map((filmArray) => {
    let containedFlag = false;
    let savedFilm;

    filmArray.forEach((film) => {
      console.log(selectedFilm);
      console.log(film.id);
      if (film.id == selectedFilm) {
        savedFilm = film;
        containedFlag = true;
      }
    })


    
    if (containedFlag) {
      shownCardsAdder(printArray, filmArray);
      let displayShowingData = [];

      printArray.push(
        <>
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">

            <Card style={{ width: "80%" }}>
              <Card.Body>
                <Container>
                  <Row>
                    <Col>
                      <Card.Img id="shownFilmImage" variant="top" src={`${savedFilm.film_poster}`} />

                    </Col>

                    <Col>

                      <div class="col-xs-1 showingData" align="center" className="showingData">

                        <h1>Showings for {`${savedFilm.film_title}`}</h1>
                        {
                          showingData.map((i) => {
                            console.log(i.film_id);
                            console.log(savedFilm.id);
                            if (i.film_id === savedFilm.id) {
                              displayShowingData.push(
                                <>
                                  <br />
                                  <h2>Showing at: {dateParseFromDB(i.showing_time)}</h2>
                                  <h2>With {i.remaining_seats} seats left on Screen {i.showing_screen}</h2>
                                  <Button onClick={handleShow}>Book Now</Button>
                                  
                                </>
                              )
                            }
                          }
                          )
                        }

                        {displayShowingData}
                      </div >
                    </Col>
                  </Row>

                </Container>
              </Card.Body>

            </Card>
          </Col>
        </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      
)
    }

    else {
      shownCardsAdder(printArray, filmArray);
    }
  })

  function shownCardsAdder(printArray, filmArray) {
    printArray.push(
      <Row>
        {filmArray.map((i) => {
          return (
            <Col className=" d-flex align-items-center justify-content-center">

              <Link to={`/screenings/${i.id}`}>
                <Card style={{ width: "36rem" }} className="hp-card">
                  <Card.Body>
                    <Container>
                      <Row>
                        <Col>
                          <Card.Img variant="top" src={`${i.film_poster}`} />

                        </Col>

                        <Col>

                          <div class="col-xs-1" align="center">

                            <Button class="cardButton">Go to Screenings</Button>
                          </div>
                        </Col>
                      </Row>

                    </Container>
                  </Card.Body>

                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    );
  }


  if (loaded) {
    console.log("68890");
    if (error !== "") {
      console.log(error);
    } else if (showingData !== "") {
      console.log(showingData);
      return (
        <>
          {printArray}
        </>
      );

    }
  } else {
    console.log("68891");
  }
};

export default FilledScreening;



