import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const filledHomePageReturn = (films, newReleases) => {
  console.log("IN FILLED HOME PAGE");
  console.log(films);
  console.log(newReleases);

  const carouselList = [];

  const cardList = [];

  newReleases.slice(0, 3).map((i) => {
    carouselList.push(
      <Carousel.Item>
        <img
          className="carousel-image"
          src={`${i.film_poster}`}
          alt={`Poster for ${i.film_title}`}
        />
        {/* <Carousel.Caption>
          <h3>{`${i.film_title}`}</h3>
          <p>{`${i.film_genre} film with a rating of ${i.film_rating}`}</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    );
  });

  films.map((i) =>
  {
    cardList.push(
      <Col className=" d-flex align-items-center justify-content-center">

    <Link to={`/screenings/${i.film_title.replace(/\s+/g, '')}`}>
      <Card style={{ width: "18rem" }} className="hp-card" >
      <Card.Img variant="top" src={`${i.film_poster}`} />
      <Card.Body>
      <div class="col-xs-1" align="center">
        
        <Button class="cardButton">Go to Screenings</Button>
        </div>
      </Card.Body>
    </Card>
    </Link>
    </Col>
  );
  })



  return (
    <>
      <Container>
        <Row>
          <Col>
          <img id="imageCarouselLeft" src={`${newReleases[0].film_poster}`} />
          </Col>

          <Col>
            <Carousel className="filmCarouselTwo" >{carouselList}</Carousel>
          </Col>

          <Col>
            <img id="imageCarouselRight" src={`${newReleases[2].film_poster}`} />
          </Col>
        </Row>
      </Container>

      <Container fluid className="new-rs-title-container">
        <Row>
          <h1>QA's Newest Films</h1>
        </Row>
      </Container>

      {/* // Cards  */}
      <Container fluid className="hp-card-container">
        <Row>
          {cardList}
        </Row>
      </Container>
      {/* // New Release Cards  */}
      {/* <Container fluid className="new-realease-container">
        <Row className="new-rel-row">
          <Col>
            <Card className="bg-dark  new-rel-card">
              <Card.Img
                className="nr-card-img"
                src={`${newReleases[1].film_poster}`}
                alt="Card image"
              />
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
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
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
                <a
                  target="_blank"
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                >
                  <i class="fab fa-facebook-f"></i>
                  <span class="sr-only">Facebook</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  target="_blank"
                  href="https://twitter.com/explore"
                  rel="noreferrer"
                >
                  <i class="fab fa-twitter"></i>
                  <span class="sr-only">Twitter</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  target="_blank"
                  href="https://uk.linkedin.com/"
                  rel="noreferrer"
                >
                  <i class="fab fa-linkedin-in"></i>
                  <span class="sr-only">Linkedin</span>
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                >
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

export default filledHomePageReturn;
