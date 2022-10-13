
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import BuyNowComponent from "@components/buy/buynow"
export default function BuyNow() {
  return (
    <>
     <Head
          title="GreenBoost: Buy Now"
          description="GreenBoost: Buy Now"
        />
        <BuyNowComponent/>
    </>
  )
}

BuyNow.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
