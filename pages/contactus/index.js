
import { ReactElement } from "react"

import Layout from "@components/layout"
import Head from "@components/head"
import ContactUsComponet from "@components/contactus"
export default function ContactUs() {
  return (
    <>
      <Head
        title="GreenBoost: Contact Us"
        description="GreenBoost: Contact Us"
      />
        <ContactUsComponet />
    </>
  )
}

ContactUs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
