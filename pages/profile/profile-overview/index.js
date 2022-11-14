
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileOverviewSellerComponet from "@components/profile/profileOverviewSeller"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"

export default function Profile() {
  return (

    <>
      <Head
        title="GreenBoost: Profile"
        description="GreenBoost: Profile"
      />
      <ProfileOverviewSellerComponet />
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
