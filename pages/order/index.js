import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Head from "@components/head"
import Layout from "@components/layout"

import { useSession, getSession } from 'next-auth/react';
import CheckoutFormComponent from "@components/checkoutForm";
import OrderComponent from "@components/order"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default async function Order({cart}) {

  const { data: session, status } = useSession();
  console.log(cart)
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

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { getCartServices } = require('services');

  console.log(session.user.id)
  const res = await getCartServices.getCart(session?.user.id);

  console.log(res)
  const cart = await res.json()

  //const userInfo = {"id":"id","name":"name"}
  return {
    props: {
      cart
    }
  };
}