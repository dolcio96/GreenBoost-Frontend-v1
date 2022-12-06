
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileProjectsComponet from "@components/profile/profile-projects"
import ProfileProjectBuyerComponent from "@components/profile/profileProjectsBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
export default function Profile() {
  const router = useRouter();

  return (
    
    <>
     <Head
          title="GreenBoost: Profile Projects"
          description="GreenBoost: Profile Projects"
        />

      {/*<ProfileProjectsComponet/> */}   
      <ProfileProjectBuyerComponent/>
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
