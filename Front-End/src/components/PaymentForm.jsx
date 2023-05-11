import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
// import { Container } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    const config = {
      headers: {
        "Acces-Control-Allow-Origin": "*",
      },
    };

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "http://localhost:8080/",
          {
            amount: 1000,
            id,
          },
          config
        );

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            {" "}
            {!success ? (
              <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                  <div className="FormRow">
                    <CardElement options={CARD_OPTIONS} />
                  </div>
                </fieldset>
                <button>Pay</button>
              </form>
            ) : (
              // <Form>
              //   <Form.Group className="mb-3" controlId="formBasicEmail">
              //     <Form.Label>Email address</Form.Label>
              //     <Form.Control type="email" placeholder="Enter email" />
              //     <Form.Text className="text-muted">
              //       We'll never share your email with anyone else.
              //     </Form.Text>
              //   </Form.Group>
              //   <Row>
              //     <CardElement options={CARD_OPTIONS} />
              //     <Form.Group className="mb-3" controlId="formBasicPassword">
              //       <Form.Label>Password</Form.Label>
              //       <Col>
              //         <Form.Control type="password" placeholder="Password" />
              //       </Col>
              //       <Col>
              //         <Form.Control type="password" placeholder="CCV" />
              //       </Col>
              //     </Form.Group>
              //   </Row>
              //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
              //     <Form.Check type="checkbox" label="Check me out" />
              //   </Form.Group>

              //   <Button variant="primary" type="submit">
              //     Submit
              //   </Button>
              // </Form>
              <div>
                <h2></h2>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaymentForm;
