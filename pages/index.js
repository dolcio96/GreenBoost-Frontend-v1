
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
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
  return <HomeLayout>{page}</HomeLayout>
}
