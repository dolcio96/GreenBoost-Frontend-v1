
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import LoginComponet from "@components/auth/login"
export default function Login() {
  return (
    <>
     <Head
          title="GreenBoost: Login"
          description="GreenBoost: Login"
        />
    <LoginComponet/>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
