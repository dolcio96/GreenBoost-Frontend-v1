
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import SignupComponent from "@components/auth/signup"
export default function Signup() {
  return (
    <>
     <Head
          title="GreenBoost: Signup"
          description="GreenBoost: Signup"
        />
    <SignupComponent/>
    </>
  )
}

Signup.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
