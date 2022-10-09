import * as React from 'react';
import { NextPageWithLayout } from "../../types/global"
import { ReactElement } from "react"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head"

const Aboutus: NextPageWithLayout = () => {


    return (<>
    <Head
        title="GreenBoost: About Us"
        description="GreenBoost: About Us"
      />
        Aboutus
    </>)

}

Aboutus.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>
  }

export default Aboutus
