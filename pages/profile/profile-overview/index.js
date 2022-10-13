
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileOverviewComponet from "@components/profile/profile-overview"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
export default function Profile() {
  const router = useRouter();
  console.log(router)
  return (
    
    <>
     <Head
          title="GreenBoost: Profile"
          description="GreenBoost: Profile"
        />
    <ProfileOverviewComponet/>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
