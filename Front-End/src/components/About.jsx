import React from "react";
import "./About.css";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import Building from "./aboutImages/AboutBuilding.jpg";
import Chair from "./aboutImages/AboutChair.jpg";
import Screen from "./aboutImages/AboutScreen.jpg";
import Openings from "./aboutImages/AboutOpeningTime.png";
import Tickets from "./aboutImages/AboutTickets.png";
import Values from "./aboutImages/AboutValues.png";
import Location from "./aboutImages/AboutLocation.png";
import { Carousel } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useEffect, useRef, useState } from "react";

import Button from "react-bootstrap/Button";

import { Container, Row, Col, Alert } from "react-bootstrap";
const About = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="text-center mx-auto">
            {" "}
            <h1 className="aboutPage text-center ">About Us</h1>
            <img className="openings-image" src={Openings} alt="Values" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mx-auto">
            {" "}
            <img className="openings-image" src={Location} alt="Location" />
          </Col>
          <Col className="text-center mx-auto">
            {" "}
            <img className="openings-image" src={Values} alt="Values" />
          </Col>
        </Row>
      </Container>
      <h3 className="aboutPage">
        <span>Who are We?</span>
      </h3>

      <Alert>
        {" "}
        <p1>
          We are specialists in technology! With our expertise and cutting edge
          technology to bring you the perfect blend of innovation and
          entertainment. Step into our world of technological marvels and let us
          take you on an unforgettable cinematic adventure like no other.
          Welcome to the future of cinema. Still want to learn more?{" "}
          <a href="/contact">Write to us!</a>
        </p1>
        <Container>
          <Row>
            <Col className="text-center">
              <Button
                className="about-btn"
                variant="primary"
                onClick={handleShow}
              >
                About Us
              </Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header className="offCanva-head" closeButton>
                  <Offcanvas.Title>Quick Links</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="offCanva">
                  <ul className="aboutList">
                    <a href="/theteam">
                      <li>Come and see the team at qa Cinema</li>
                    </a>
                    <a href="/ratings">
                      {" "}
                      <li>Certifications and FAQ's</li>{" "}
                    </a>

                    <a href="/map">
                      <li>Where are we located</li>{" "}
                    </a>
                    <a href="/placestoeat">
                      <li>Places to eat </li>
                    </a>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </Col>
          </Row>
        </Container>
      </Alert>

      <h1 className="aboutPage">
        <span>A preview of our new state of the art cinema.</span>
      </h1>
      <Carousel className="aboutPage">
        <div className="aboutPage">
          <img className="aboutPage" src={Building} alt="Site" />
        </div>
        <div className="aboutPage">
          <img className="aboutPage" src={Chair} alt="Seating" />
        </div>
        <div className="aboutPage">
          <img className="aboutPage" src={Screen} alt="Screen" />
        </div>
        <p1 className="aboutPage">
          This top of the line new cinema will change the industry forever
        </p1>
      </Carousel>
    </>
  );
};

export default About;
