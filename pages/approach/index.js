
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import CreateComponent from "@components/approach"
export default function OurApproach() {
  return (
    <>
      <Head
        title="GreenBoost: Il nostro approccio"
        description="GreenBoost: Il nostro approccio"
      />
      <CreateComponent />
    </>
  )
}

OurApproach.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
