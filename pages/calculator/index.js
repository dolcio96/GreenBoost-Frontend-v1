
import { ReactElement } from "react"

import Layout from "@components/layout"
import Head from "@components/head"
import CalculatorComponet from "@components/calculator"
export default function Calculator() {
  return (
    <>
      <Head
        title="GreenBoost: Calculator"
        description="GreenBoost: Calculator"
      />
        <CalculatorComponet />
    </>
  )
}

Calculator.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
