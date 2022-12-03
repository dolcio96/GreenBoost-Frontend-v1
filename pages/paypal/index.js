
import Head from "@components/head"
import PaypalComponent from "@components/paypal"
import Layout from "@components/layout"

export default function Paypal() {
  return (

    <>
      <Head
        title="GreenBoost: Paypal"
        description="GreenBoost: Paypal"
      />
      < PaypalComponent/>
    </>
  )
}

Paypal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
