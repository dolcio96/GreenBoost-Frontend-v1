import {
  Spinner,
  Center,
} from '@chakra-ui/react';

import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileOverviewSellerComponet from "@components/profile/profileOverviewSeller"
import ProfileOverviewBuyerComponet from "@components/profile/profileOverviewBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession, getSession } from "next-auth/react"
import { getUserDataService } from 'services';

export default function Profile({data}) {
  const { data: session, status } = useSession()
  console.log("data")
  console.log(data)
  var userData = null

  if (status != 'loading') {
    userData = getUserDataService.getData(session.user.id)
    console.log(userData)
  }

  return (

    <>
      <Head
        title="GreenBoost: Profile"
        description="GreenBoost: Profile"
      />
      {status == 'loading' ?
        <Center h='70vh'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor="#b7e4c7"
            color="#0B0E3F"
            size='xl' />
        </Center>
        : session?.user.customer_type == "buyer" ?
          <ProfileOverviewBuyerComponet />
          : <ProfileOverviewSellerComponet />}

    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("session")
  console.log(session)

  // Import the function that you want to call
  const { getUserDataService } = require('services');

  // Pass the session parameter to the function and await its response
  //const data = await getUserDataService.getData(session.user.id);

  const res = await fetch(
    process.env.BACKEND_API_URL + `backend/crud/buyer/`+ userID,
    {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }
)
const data = await res.json()


  // Return the data as props
  return {
    props: {
      data
    }
  };
}