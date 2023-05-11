import Form from "./ContactForm";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/Card";
import CardText from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <Container fluid className="contact-container">
        <Row>
          <Col className="text-center">
            <p>QA Cinema is loocated at Manchester one building </p>
            <p>53 Portland Street</p>
            <p>M1 3LD</p>
          </Col>
        </Row>
      </Container>

      <Form />
    </>
  );
};

export default Contact;
