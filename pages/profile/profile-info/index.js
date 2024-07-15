
import {
  Spinner,
  Center,
} from '@chakra-ui/react';

import Head from "@components/head"

import ProfileInfoSellerComponet from "@components/profile/profileInfoSeller"
import ProfileInfoBuyerComponet from "@components/profile/profileInfoBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useSession , getSession} from "next-auth/react"

import handler from '@pages/api/backend/user/userGetData'

export default function ProfileInfo({userInfo}) {
  const { data: session, status } = useSession()
  return (

    <>
      <Head
        title="GreenBoost: Profile Info"
        description="GreenBoost: Profile Info"
      />
      {status == 'loading' ?
        <Center h='70vh'>
          <Spinner
            speed='0.65s'
            emptyColor="#b7e4c7"
            color="#0B0E3F"
            size='xl' />
        </Center>
        : session?.user.customer_type == "seller" ?
        <ProfileInfoSellerComponet userInfo={userInfo}/>
          : <ProfileInfoBuyerComponet userInfo={userInfo}/>}

    </>
  )
}

ProfileInfo.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}


//inserire funzione che fa il fetch per i PDF dell'utente

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // Crea un oggetto fittizio req e res per la chiamata a handler

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }


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
