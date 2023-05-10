import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomePage = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/guardians-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/Leon-poster.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src="images/logan_lob_crd_02.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* // Cards  */}
      <Container fluid className="hp-card-container">
        <Row>
          <Col className=" d-flex align-items-center justify-content-center">
            <Card style={{ width: "18rem" }} className="hp-card">
              <Card.Img variant="top" src="images/guardians-3.jpg" />
              <Card.Body>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>{" "}
          </Col>

          <Col className=" d-flex align-items-center justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/guardians-3.jpg" />
              <Card.Body>
                <Button>Go somewhere</Button>
              </Card.Body>
            </Card>{" "}
          </Col>

          <Col className=" d-flex align-items-center justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="images/guardians-3.jpg" />
              <Card.Body>
                {/* <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>{" "}
          </Col>
        </Row>
      </Container>
      {/* // New Release Cards  */}
      <Container fluid className="new-realease-container">
        <Row className="new-rel-row">
          <Col>
            <Card className="bg-dark  new-rel-card">
              <Card.Img
                className="nr-card-img"
                src="images/guardians-3.jpg"
                alt="Card image"
              />
              {/* <Card.ImgOverlay> */}
              {/* <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay> */}
            </Card>
          </Col>
          <Col className="nr-text-col">
            {" "}
            <Card className=" nr-text-card ">
              <Card.Body>
                <Card.Title>New Releases</Card.Title>

                <Card.Text>Check QA Cinemas newest releases.</Card.Text>
                <Card.Link href="#">
                  {" "}
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Book Now
                    </Button>
                  </div>
                </Card.Link>
                {/* <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* // Footer  */}
      <Container fluid className="footer-container">
        <Row>
          <Col className="QuickLinks-col">
            {" "}
            <ul>
              <p></p>
              <li>
                {" "}
                <a href=""> Quick Link</a>
              </li>
              <li>
                {" "}
                <a href=""> Quick Link</a>
              </li>
              <li>
                {" "}
                <a href=""> Quick Link</a>
              </li>
              <li>
                {" "}
                <a href=""> Quick Link</a>
              </li>
            </ul>
          </Col>
          <Col></Col>
          <Col className="opening-col">
            <ul>
              <p>OPENING TIMES</p>
              <li>Monday: 12pm-10pm</li>
              <li>Tuesday: 12pm-10pm</li>
              <li>Wednesday: 12pm-10pm</li>
              <li>Thursday: 12pm-11pm</li>
              <li>Friday: 12pm-12am</li>
              <li>Saturday: 12pm-12am</li>
              <li>Sunday: 12pm-10pm</li>
            </ul>
          </Col>
        </Row>
      </Container>
      {/* // Social Footer  */}
      <Container fluid className="footer-social-container">
        <Row>
          <Col className="d-flex justify-content-center">
            {" "}
            <ul class="list-inline social-links ">
              <li class="list-inline-item ">
                <a target="_blank" href="https://www.facebook.com/">
                  <i class="fab fa-facebook-f"></i>
                  <span class="sr-only">Facebook</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="https://twitter.com/explore">
                  <i class="fab fa-twitter"></i>
                  <span class="sr-only">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="https://uk.linkedin.com/">
                  <i class="fab fa-linkedin-in"></i>
                  <span class="sr-only">Linkedin</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a target="_blank" href="https://www.instagram.com/">
                  <i class="fab fa-instagram"></i>
                  <span class="sr-only">Instagram</span>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
