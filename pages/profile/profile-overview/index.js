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

import handler from '@pages/api/backend/user/userGetData'

export default function Profile( {userInfo} ) {
const { data: session, status } = useSession()
console.log(session);
console.log(userInfo);
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
        : session?.user.customer_type == "seller" ?
        <ProfileOverviewSellerComponet userInfo={userInfo}/>
          : <ProfileOverviewBuyerComponet userInfo={userInfo}/>}

    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Crea un oggetto fittizio req e res per la chiamata a handler
  const req = {
    query: {
      userType: session?.user.customer_type,
      userID: session?.user.id
    }
  };

  const res = {
    status: (statusCode) => ({
      json: (data) => ({ statusCode, data })
    })
  };

  const response = await handler(req, res);

  // Estrarre userInfo dal risultato di handler
  const userInfo = response;
  return {
    props: {
      userInfo
    }
  };
}