
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ChooseVCCComponent from "@components/projects/choosevcc"
export default function ChooseVCC() {
  return (
    <>
     <Head
          title="GreenBoost: Choose VCC"
          description="GreenBoost: Choose VCC"
        />
        <ChooseVCCComponent/>
    </>
  )
}

ChooseVCC.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
