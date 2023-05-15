import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Footer(){
    return(
        <>
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
    )
}

export default Footer;