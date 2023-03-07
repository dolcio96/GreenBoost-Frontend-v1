
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import AboutUsComponet from "@components/aboutus"

export default function AboutUs() {
 
    return (
        <>
        <Head
          title="GreenBoost: About Us"
          description="GreenBoost: About Us"
        />
          <AboutUsComponet />
      </>
    )
}

AboutUs.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
  }
  