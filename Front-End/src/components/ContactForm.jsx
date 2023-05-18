import { useForm, ValidationError } from "@formspree/react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xqkojkkr");
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  if (state.succeeded) {
    return (
      <div className="contact-msg">
        <Col md={4} className="mx-auto">
          <Toast className="contact-toast" show={showA} onClose={toggleShowA}>
            <Toast.Header className="contact-toast-header text-center">
              {/* <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              /> */}
              <strong className="me-auto">QA Cinemas</strong>
            </Toast.Header>
            <Toast.Body>
              Thank you for you for your inquiry. Responses typically take 1-2
              working days.
            </Toast.Body>
          </Toast>
        </Col>
      </div>
    );
  }
  return (
    <Container className="email-container">
      <Row>
        <Col>
          <form className="contact-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                name="name"
              />{" "}
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />{" "}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Form.Group className="mb-3">
              <Form.Label>Enquiry</Form.Label>
              <Form.Control
                placeholder="Enter enquiry"
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button type="submit" disabled={state.submitting}>
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
