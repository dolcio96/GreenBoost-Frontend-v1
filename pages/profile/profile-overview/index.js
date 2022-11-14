
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileOverviewSellerComponet from "@components/profile/profileOverviewSeller"
import ProfileOverviewBuyerComponet from "@components/profile/profileOverviewBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"

export default function Profile() {
  const role = "buyer"


  return (

    <>
      <Head
        title="GreenBoost: Profile"
        description="GreenBoost: Profile"
      />
      {role == "buyer" ?
        <ProfileOverviewBuyerComponet />
        : <ProfileOverviewSellerComponet />}

    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
