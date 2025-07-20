import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY || "";
// Debugging line to check if the key is loaded
if (!stripeSecretKey) {
  // Fail fast during startup if the key is not configured.
  // This prevents runtime errors during requests.
  throw new Error(
    "Stripe secret key (STRIPE_SECRET_KEY) is not set in environment variables."
  );
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2022-11-15", // 2025-06-30.basil
  typescript: true,
});

export default stripe;
