import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ProductDisplay from "./ProductDisplay";
import CheckoutForm from "./CheckoutForm";
// import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51N6WNWCKjd8RwmSK8SoMWnKiN2J2OO6spK0MS5tjLMiixQJdzBJvKBsMmjhqU3AzAmMHUeYV1pp43sQafV2tLoXs0074uQolOD"
);

export default function StripeContainer({ticketAmount}) {
  const [clientSecret, setClientSecret] = useState("");
  const createdPaymentIntent = useRef(false);

  const paymentId = useRef("");

  
  const amountOfTickets = [];

  for(let i=0; i<ticketAmount; i++)
  {
    amountOfTickets.push({id:"cinema-ticket"});
    }


  // useEffect(() => {

  //   if(createdPaymentIntent.current === true)
  //   {
  //     console.log(amountOfTickets)
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("http://localhost:8080/update-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: amountOfTickets}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret))
  //     .catch((err) => console.log(err));

  //   }
    
  // }, [prop.data]);


  useEffect(() =>
  {
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: amountOfTickets}),
    })
      .then((res) => {
        console.log(res);
        return res.json();})
      .then((data) => {
        console.log(data);
        paymentId.current = data.id;
        createdPaymentIntent.current = true;
        return setClientSecret(data.clientSecret);})
      .catch((err) => console.log(err));
  }, [ticketAmount])

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
