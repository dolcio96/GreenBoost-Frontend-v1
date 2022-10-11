
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileComponet from "@components/profile"
export default function Profile() {
  return (
    <>
     <Head
          title="GreenBoost: Profile"
          description="GreenBoost: Profile"
        />
    <ProfileComponet/>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
