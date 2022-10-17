
import { ReactElement } from "react"
import Layout from "@components/layout"
import Hero from "@components/hero"
import Head from "@components/head"
import Testimonial from "@components/testimonials"
import HomeNav from "@components/homeBuySellCreate"
export default function Home() {
  return (
    <>
      <Head
        title="GreenBoost"
        description="GreenBoost."
      />
      <Hero />
      <HomeNav/>
      <Testimonial />

    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
