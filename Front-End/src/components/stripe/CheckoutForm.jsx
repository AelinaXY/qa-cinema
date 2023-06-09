import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "react-bootstrap/Button";
import axios from "axios";

export default function CheckoutForm(prop) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          console.log("Message before setting state: ", message);
          setMessage("Payment succeeded!");
          console.log("Message after setting state: ", message);

          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    const ticketIds = [];

    console.log("handleSubmit called");

    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    console.log(prop);
    console.log(email);

    let userId = "";
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    console.log(`making request for at http://localhost:8080/users`);
    await axios
      .post(
        `http://localhost:8080/users`,
        {
          user_name: email,
        },
        config
      )
      .then((response) => {
        userId = response.data.id;
      })
      .catch((error) => {
        console.log(error);
      });

    await Promise.all(
      prop.data.map(async (i) => {
        for (let j = 0; j < i; j++) {
          await axios
            .post(
              `http://localhost:8080/tickets`,
              {
                ticket_showing: prop.id,
                ticket_user: userId,
              },
              config
            )
            .then((response) => {
              ticketIds.push(response.data.id);
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
    );

    console.log(ticketIds);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/thankyou/",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    //Remove errant ticket bookings
    await Promise.all(
      ticketIds.map(async (i) => {
        await axios
          .delete(
            `http://localhost:8080/tickets/${i}`,
            {
              ticket_showing: prop.id,
              ticket_user: userId,
            },
            config
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
    );

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.value.email)}
      />

      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {/* <Button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </Button> */}

      <button
        className="btn-primary stripe-btn"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      {message === "Payment succeeded!" && (
        <div id="success-message">{message}</div>
      )}
    </form>
  );
}
