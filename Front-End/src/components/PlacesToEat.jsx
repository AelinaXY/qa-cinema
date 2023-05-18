// const { Container } = require("semantic-ui-react");
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Container, Row, Col } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const PlacesToEat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className="places-Container">
      <Row>
        <Col>
          {" "}
          <h1 className="text-center">Places to eat and drink </h1>
          <CardGroup>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/tib1.jpeg"
              />

              <Card.Body>
                <Card.Title>
                  {" "}
                  <a target="_blank" href="https://www.10tiblane.com/">
                    10 Tib Lane
                  </a>{" "}
                </Card.Title>
                <Card.Text>
                  Classic cocktails, natural wine that doesn’t scare you off,
                  beer that matters and seasonal food with the best produce we
                  can get our hands on.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  10 Tib Ln, Manchester M2 4JB
                </small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/rudies.jpeg"
              />

              <Card.Body>
                <Card.Title>
                  <a
                    target="_blank"
                    href="https://www.rudyspizza.co.uk/pizzerias/peterst"
                  >
                    {" "}
                    Rudys
                  </a>
                </Card.Title>
                <Card.Text>
                  We're a relaxed neighbourhood pizzeria, following the
                  traditions and artistry of pizza from Naples - the birth place
                  of pizza.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Petersfield House, Peter St, Manchester M2 5QJ
                </small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/schloss.jpeg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a
                    target="_blank"
                    href="https://www.albertsschloss.co.uk/manchester/"
                  >
                    Albert Schloss
                  </a>{" "}
                </Card.Title>
                <Card.Text>
                  Bavarian-style beer cellar for traditional German food and
                  pilsner beers on tap and in bottles. German food, beer and
                  lots of live music.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {" "}
                  27 Peter St, Manchester M2 5QR
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/blinker.jpeg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a target="_blank" href="https://www.blinkerbar.co.uk/">
                    {" "}
                    Blinker
                  </a>
                </Card.Title>
                <Card.Text>
                  Seasonal fruits used to create a menu that changes every
                  month. Exceptional cocktails, brilliant service and fun times.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  64-72 Spring Gardens, Manchester M2 2BQ
                </small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/mulligans.jpeg"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a
                    target="_blank"
                    href="http://www.mulligansofdeansgate.com/"
                  >
                    Mulligans
                  </a>{" "}
                </Card.Title>
                <Card.Text>
                  Mulligans, based just off Deansgate in the heart of
                  Manchester, is an Authentic Irish Pub, renowned for having the
                  best pint of Guinness in Manchester and is Manchester’s oldest
                  Irish Pub.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {" "}
                  12 Southgate, Manchester M3 2RB
                </small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/schofields.webp"
              />
              <Card.Body>
                <Card.Title>
                  {" "}
                  <a target="_blank" href="https://www.schofieldsbar.com/">
                    Schofields
                  </a>{" "}
                </Card.Title>
                <Card.Text>
                  With over 25 years of experience collectively, bartender
                  brothers Joe and Daniel Schofield always had a vision to
                  return to their home city of Manchester to open their
                  eponymous venue; SCHOFIELD’S BAR.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  3 Little Quay Street Sunlight House, Manchester M3 3JZ
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
          <Button variant="primary" onClick={handleShow}>
            Launch
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="offCanva">
              <ul className="aboutList">
                <a href="/placestoeat">
                  <li>Come and see the team at qa Cinema</li>
                </a>
                <a href="/ratings">
                  {" "}
                  <li>Certifications and FAQ's</li>{" "}
                </a>

                <a href="">
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
  );
};

export default PlacesToEat;
