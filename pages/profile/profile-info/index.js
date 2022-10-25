
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileInfoComponet from "@components/profile/profile-info"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"

export default function ProfileInfo() {
  return (

    <>
      <Head
        title="GreenBoost: Profile Info"
        description="GreenBoost: Profile Info"
      />
      <ProfileInfoComponet />
    </>
  )
}

ProfileInfo.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
