import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51N6WNWCKjd8RwmSK8SoMWnKiN2J2OO6spK0MS5tjLMiixQJdzBJvKBsMmjhqU3AzAmMHUeYV1pp43sQafV2tLoXs0074uQolOD";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
};

export default StripeContainer;
