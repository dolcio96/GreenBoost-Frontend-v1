import type { NextPage } from 'next'
import { ReactElement } from "react"
import { NextPageWithLayout } from "../types/global"
import Head from "../modules/common/components/head"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../modules/layout/templates"



const Home = () => {
  return (
    <>
      <Head
        title="GreenBoost"
        description="GreenBoost."
      />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
