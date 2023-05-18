import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Map = () => {
  //   const position = [53.478154, -2.238327];

  return (
    <>
      {" "}
      <Container className="header-maps">
        <Row>
          <Col>
            {" "}
            <h3 className="text-center">
              QA Cinema is located at the Manchester One building 53, Portland
              Street, Manchester, Greater Manchester, M1 3LD
            </h3>
          </Col>
        </Row>
      </Container>
      <Container className="about-map-container">
        <Row>
          <Col>
            <MapContainer
              center={[53.478154, -2.238327]}
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[53.478154, -2.238327]} />
            </MapContainer>
          </Col>
        </Row>
      </Container>
      {/* <Container className="header-maps">
        <Row>
          <Col>
            <ul class="alert alert-primary" role="alert">
              <li>
                {" "}
                <p>
                  {" "}
                  For information on public transport that takes you Piccadilly
                  which is the nearest transport hub to QA cinemas please visit{" "}
                  <a
                    target="_blank"
                    href="https://moovitapp.com/index/en-gb/public_transportation-Manchester_Piccadilly_Railway_Station_MAN-North_West-site_19067081-2105"
                  >
                    Moovit
                  </a>{" "}
                  or{" "}
                  <a
                    target="_blank"
                    href="https://tfgm.com/public-transport/bus/stations/manchester-piccadilly-gardens-bus"
                  >
                    Transport for Greater Manchester
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Parking can be found at{" "}
                  <a
                    target="_blank"
                    href="https://www.ncp.co.uk/find-a-car-park/car-parks/manchester-chorlton-street/"
                  >
                    Chorlton street car park.
                  </a>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container> */}
      <Container className="places-Container">
        <Row>
          <Col>
            {" "}
            <h1 className="text-center">Parking </h1>
            <h1 className="text-center">Public Transport </h1>
            <CardGroup>
              <Card className="places-card">
                <Card.Img
                  className="places-img"
                  variant="top"
                  src="/images/public-transport.jpeg"
                />

                <Card.Body>
                  <Card.Title>
                    <a
                      target="_blank"
                      href="https://tfgm.com/public-transport/bus/stations/manchester-piccadilly-gardens-bus"
                    >
                      Transport for Greater Manchester
                    </a>
                  </Card.Title>
                  <Card.Text>
                    Please visit transport greater Manchester. QA cinema is
                    located within a few minutes of various public transport
                    routes.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {/* <small className="text-muted">
                    Petersfield House, Peter St, Manchester M2 5QJ
                  </small> */}
                </Card.Footer>
              </Card>
              <Card className="places-card">
                <Card.Img
                  className="places-img"
                  variant="top"
                  src="/images/parking.jpeg"
                />

                <Card.Body>
                  <Card.Title>
                    <a
                      target="_blank"
                      href="https://www.ncp.co.uk/find-a-car-park/car-parks/manchester-chorlton-street/"
                    >
                      Chorlton street car park.
                    </a>
                  </Card.Title>
                  <Card.Text>
                    For parking please visit chorlton street car park situated
                    next to QA cinema.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Chorlton St., Manchester M1 3FY
                  </small>
                </Card.Footer>
              </Card>
              <Card className="places-card">
                <Card.Img
                  className="places-img"
                  variant="top"
                  src="/images/moovit.jpeg"
                />

                <Card.Body>
                  <Card.Title>
                    <a
                      target="_blank"
                      href="https://moovitapp.com/index/en-gb/public_transportation-Manchester_Piccadilly_Railway_Station_MAN-North_West-site_19067081-2105"
                    >
                      Moovit
                    </a>{" "}
                  </Card.Title>
                  <Card.Text>
                    Moovit: More than a train and bus time app! Use it for
                    public transit navigation, maps, schedules, real-time
                    arrivals and more!
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  {/* <small className="text-muted">
                    10 Tib Ln, Manchester M2 4JB
                  </small> */}
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
