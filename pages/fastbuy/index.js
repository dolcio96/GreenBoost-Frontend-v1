
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import FastBuyComponent from "@components/projects/fastbuy"
export default function FastBuy() {
  return (
    <>
     <Head
          title="GreenBoost: Fast Buy"
          description="GreenBoost: Fast Buy"
        />
        <FastBuyComponent/>
    </>
  )
}

FastBuy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
