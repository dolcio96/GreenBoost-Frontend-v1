// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Create a PaymentIntent with the order amount and currency
  const account = await stripe.accounts.create({ type: 'express' });

  res.send({
    account
  });
};
