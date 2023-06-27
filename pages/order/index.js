import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Head from "@components/head"
import Layout from "@components/layout"

import { useSession } from 'next-auth/react';
import CheckoutFormComponent from "@components/checkoutForm";
import OrderComponent from "@components/order"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default async function Order() {

  const { data: session, status } = useSession();

  var cart = await  fetch("/api/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(session?.user.id),
  })
    .then((res) => res.json())

  const [clientSecret, setClientSecret] = React.useState("");

  const [orderItems, setOrderItem] = React.useState("");

  React.useEffect(async () => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

  }, []);


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log(cart)
  return (
    <>
      <Head
        title="GreenBoost: Order"
        description="GreenBoost: Order"
      />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <OrderComponent />
        </Elements>
      )}

    </>
  )
}

Order.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

