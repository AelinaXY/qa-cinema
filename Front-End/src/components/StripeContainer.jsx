// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import PaymentForm from "./PaymentForm";

// const PUBLIC_KEY =
//   "pk_test_51N6WNWCKjd8RwmSK8SoMWnKiN2J2OO6spK0MS5tjLMiixQJdzBJvKBsMmjhqU3AzAmMHUeYV1pp43sQafV2tLoXs0074uQolOD";
// const stripeTestPromise = loadStripe(PUBLIC_KEY);

// const StripeContainer = () => {
//   return (
//     <Elements stripe={stripeTestPromise}>
//       <PaymentForm />
//     </Elements>
//   );
// };

// export default StripeContainer;

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
// import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51N6WNWCKjd8RwmSK8SoMWnKiN2J2OO6spK0MS5tjLMiixQJdzBJvKBsMmjhqU3AzAmMHUeYV1pp43sQafV2tLoXs0074uQolOD"
);

export default function StripeContainer() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err));
  }, []);

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
