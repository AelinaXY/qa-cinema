import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Icon } from "leaflet";
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
    </>
  );
};

export default Map;
