
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ServicesComponent from "@components/services"
export default function Services() {
  return (
    <>
      <Head
        title="GreenBoost: Il nostro approccio"
        description="GreenBoost: Il nostro approccio"
      />
      <ServicesComponent />
    </>
  )
}

Services.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
