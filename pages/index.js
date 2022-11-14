
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
import Head from "@components/head"
import HomeComponent from "@components/home"


export default function Home() {
  return (
    <>
        <Head
          title="GreenBoost"
          description="GreenBoost."
        />

        <HomeComponent/>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}
