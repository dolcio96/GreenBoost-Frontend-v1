
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
import Hero from "@components/hero"
import Head from "@components/head"
import Testimonial from "@components/testimonials"
import HomeNav from "@components/homeBuySellCreate"
import TeamComponent from "@components/team"
import DescriptionComponent from "components/description"
import { Box } from "@chakra-ui/react"
export default function Home() {
  return (
    <>
        <Head
          title="GreenBoost"
          description="GreenBoost."
        />
        <Hero />
        <HomeNav />
        {/*  <Testimonial />*/}
        <DescriptionComponent />
        <TeamComponent />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
