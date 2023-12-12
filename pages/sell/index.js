
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import CreateProjectComponent from "@components/sell"
export default function CreateProject() {
  return (
    <>
     <Head
          title="GreenBoost: Create Project"
          description="GreenBoost: Create Project"
        />
        <CreateProjectComponent/>
    </>
  )
}

CreateProject.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
