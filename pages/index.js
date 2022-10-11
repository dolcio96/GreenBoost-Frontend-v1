
import { ReactElement } from "react"
import Layout from "../components/layout"
import Hero from "components/hero"
import Head from "components/head"
import Testimonial from "components/testimonials"
export default function Home() {
  return (
    <>
      <Head
        title="GreenBoost"
        description="GreenBoost."
      />
      <Hero />
      <Testimonial />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
