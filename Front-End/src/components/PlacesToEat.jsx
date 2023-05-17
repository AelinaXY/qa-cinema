// const { Container } = require("semantic-ui-react");
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Container, Row, Col } from "react-bootstrap";

const PlacesToEat = () => {
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <CardGroup>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/tib1.jpeg"
              />

              <Card.Body>
                <Card.Title>10 Tib Lane</Card.Title>
                <Card.Text>
                  Classic cocktails, natural wine that doesn’t scare you off,
                  beer that matters and seasonal food with the best produce we
                  can get our hands on.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/rudies.jpeg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/schloss.jpeg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
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
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  Blink
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/mulligans.jpeg"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="places-card">
              <Card.Img
                className="places-img"
                variant="top"
                src="/images/schofields.webp"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default PlacesToEat;
