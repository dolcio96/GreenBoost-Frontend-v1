
import Head from "@components/head"
import OrderComponent from "@components/order"
import Layout from "@components/layout"

export default function Paypal() {
  return (

    <>
      <Head
        title="GreenBoost: Order"
        description="GreenBoost: Order"
      />
      < OrderComponent/>
    </>
  )
}

Paypal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
