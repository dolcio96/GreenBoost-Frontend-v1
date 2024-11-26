
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import DashboardComponent from "@components/dashboard"
export default function Create() {
  return (
    <>
     <Head
          title="GreenBoost: Dashboard"
          description="GreenBoost: Dashboard"
        />
<DashboardComponent/>
    </>
  )
}

Create.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
