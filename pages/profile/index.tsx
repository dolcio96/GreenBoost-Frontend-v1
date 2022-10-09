import useUser from '@lib/useUser'
import Layout from '@modules/layout/templates'
import { ReactElement } from "react"
import { NextPageWithLayout } from "../../types/global"
import Head from "@modules/common/components/head"
import { signIn, signOut, useSession } from "next-auth/react"
import ProfileTemplate from '@modules/account/templates/profile-template'
/*
const Profile = () => {
  // Fetch the user client-side
  const { user } = useUser({ redirectTo: '/login' })

  // Server-render loading state
  if (!user || user.isLoggedIn === false) {
    return <Layout>Loading...</Layout>
  }

  // Once the user request finishes, show the user
  return (
    <Layout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile*/


//import { useSession, signIn, signOut } from "next-auth/react"



const Profile: NextPageWithLayout = () => {
  /*const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return <>
    Not signed in <br />
    <button onClick={() => signIn()}>Sign in</button>
  </>*/

  const { data: session, status } = useSession()
  return (
    <>
      <Head
        title="GreenBoost: Profile"
        description="GreenBoost: Profile"
      />
      
      <p>Signed in as {session?.user?.email}</p>
    </>

  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Profile