import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51Rko4I4fspyl7GOpMZ89Jk8WsaNhrIXm4sDiigsTDL8ut3fUGsA6DHJHrY0meM1YhwGIqpjTlnK7MuJGYOm7dgYd00WUGA5bae"
      // ||import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    );
  }
  return stripePromise;
};
