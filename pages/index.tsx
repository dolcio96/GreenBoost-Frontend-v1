import type { NextPage } from 'next'
import { ReactElement } from "react"
import { NextPageWithLayout } from "../types/global"
import Head from "../modules/common/components/head"
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../modules/layout/templates"
import { useSession, signOut } from "next-auth/react"



const Home = () => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {

    return (
      <>
        <Head
          title="GreenBoost"
          description="GreenBoost."
        />

        <p>Signed in as {session?.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>

      </>
    )
  }
  else {

    return (
      <>
        <Head
          title="GreenBoost"
          description="GreenBoost."
        />

        <p>nada</p>
      </>
    )
  }

}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
