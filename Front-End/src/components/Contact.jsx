import Form from "./ContactForm";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/Container";

import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <>
      <Container fluid className="contact-container">
        <Row>
          <Col className="text-center">
            <h1 className="header">Box Office and Booking Enquiries</h1>{" "}
            <Alert className="bookings-alert">
              {" "}
              <p>
                We confirm our film programme on the Monday of each week for
                that Friday through Thursday. Best thing to do is stay posted on
                our film listings page where you can check film times and book
                tickets online. Alternatively, you can call us on 012301 123123
                to book tickets.
              </p>
              {/* <p>QA Cinema is loocated at Manchester one building </p>{" "}
              <p>53 Portland Street</p>
              <p>M1 3LD</p> */}
            </Alert>
            <p className=" bookings-alert">
              For any further enquiries please send a message to QA Cinema and
              one of the team will get back to you
            </p>
          </Col>
        </Row>
      </Container>
      <Form />
    </>
  );
};

export default Contact;
