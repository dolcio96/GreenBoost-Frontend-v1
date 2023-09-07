
import { ReactElement } from "react"

import Layout from "@components/layout"
import Head from "@components/head"
import CheckoutComponet from "@components/checkout"
export default function ContactUs() {
  return (
    <>
      <Head
        title="GreenBoost: Checkout"
        description="GreenBoost: Checkout"
      />
        <CheckoutComponet />
    </>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
