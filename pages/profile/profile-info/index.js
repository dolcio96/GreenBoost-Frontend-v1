
import Head from "@components/head"
import ProfileInfoComponet from "@components/profile/profile-info"
import ProfileLayout from "@components/layout/profileLayout"

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
