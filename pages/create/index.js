
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import CreateComponent from "@components/create"
export default function Create() {
  return (
    <>
     <Head
          title="GreenBoost: Create"
          description="GreenBoost: Create"
        />
<CreateComponent/>
    </>
  )
}

Create.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
