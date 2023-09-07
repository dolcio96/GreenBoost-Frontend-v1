
import { ReactElement } from "react"

import Layout from "@components/layout"
import Head from "@components/head"
import OrderComponent from "@components/order"
export default function Order(props) {
  return (
    <>
      <Head
        title="GreenBoost: Checkout"
        description="GreenBoost: Checkout"
      />
        <OrderComponent cart={props.cart}/>
    </>
  )
}

Order.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { getCartServices } = require('services');

  const res = await getCartServices.getCart({ "buyer_id": session?.user.id });

  const cart = await res.json()
  //const userInfo = {"id":"id","name":"name"}
  return {
    props: {
      cart
    }
  };
}