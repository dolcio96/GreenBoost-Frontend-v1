
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileProjectsComponet from "@components/profile/profile-projects"
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
    <ProfileProjectsComponet/>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
