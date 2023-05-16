import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Container, Row, Col } from "react-bootstrap";

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
      <Container className="header-maps">
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
              <li>
                <a href="https://www.blinkerbar.co.uk/">Blinker</a> is a
                cocktail bar located within 5 minutes of QA cinema, perfect for
                a post or pre film drink.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Map;
