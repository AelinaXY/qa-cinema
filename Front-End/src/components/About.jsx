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

import { Container,Row,Col,Alert } from "react-bootstrap";
const About = () => {
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
