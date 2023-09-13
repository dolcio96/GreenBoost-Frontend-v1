import item from "@components/projectDetail/item";

// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  var totalValue = 0
  var totalValueWithFee = 0
  items.map(row => (
    totalValue = totalValue + (row.quantity * (+(row.project.price_per_unit)))
  ))
  //Add Fees

  totalValueWithFee = (totalValue * 1.1).toFixed(2) * 100//Moltiplicato per 100 perchè sono centesimi
  console.log(totalValueWithFee)
  return totalValueWithFee;

};

export default async function handler(req, res) {
  const { items } = req.body;
  console.log(items)

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: ~~(calculateOrderAmount(items)/1000000), //REMOVE!
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};