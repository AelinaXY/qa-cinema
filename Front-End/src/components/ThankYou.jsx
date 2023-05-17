import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

import { Link } from "react-router-dom";

import { useState } from "react";
// import { Card } from "semantic-ui-react";

const ThankYou = () => {

  return (
    <>
      <Container>
        <Row>
          <Col className=" d-flex justify-content-center  ">
            <Card className="thankyou-card rounded-lg text-center ">
              <Card.Title
                // className="justify-content-center"
                style={{ paddingTop: "30px" }}
              >
                <h2 className="justify-content-center thankyou-head">
                  QA CINEMA
                </h2>
              </Card.Title>
              <hr></hr>
              <Card.Body>
                <h2 className="thankyou-head">Purchase successful!</h2>
                <h2 className="thankyou-head">
                  Thank you for choosing to view with QA Cinemas
                </h2>
              </Card.Body>
              <Link to="/">
                <Button className="thankyou-btn ">Home Page</Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThankYou;
