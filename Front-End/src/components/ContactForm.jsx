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
        <Col md={6} className="mb-2">
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
      </div>
    );
  }
  return (
    <Container>
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                name="name"
              />{" "}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
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
