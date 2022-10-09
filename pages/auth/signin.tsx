import type { NextPage } from 'next'
import { ReactElement } from "react"
import { NextPageWithLayout } from "../../types/global"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import LoginTemplate from "@modules/account/templates/signin-template"

const Signin: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Login: GreenBoost"
        description="Login: GreenBoost."
      />
        <LoginTemplate />
    </>
  )
}

Signin.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Signin