
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import BuyComponent from "@components/buy"
export default function Buy() {
  return (
    <>
     <Head
          title="GreenBoost: Buy"
          description="GreenBoost: Buy"
        />
        <BuyComponent/>
    </>
  )
}

Buy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
