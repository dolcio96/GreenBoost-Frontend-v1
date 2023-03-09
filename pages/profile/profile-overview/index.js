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

export default function Profile( {userInfo} ) {
  const { data: session, status } = useSession()
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
          <ProfileOverviewBuyerComponet userInfo={userInfo}/>
          : <ProfileOverviewSellerComponet userInfo={userInfo}/>}

    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { getUserDataService } = require('services');

  const res = await getUserDataService.getData(session?.user.customer_type, session?.user.id);

  const userInfo = await res.json()

  //const userInfo = {"id":"id","name":"name"}
  return {
    props: {
      userInfo
    }
  };
}