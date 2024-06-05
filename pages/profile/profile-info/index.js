
import {
  Spinner,
  Center,
} from '@chakra-ui/react';

import Head from "@components/head"

import ProfileInfoSellerComponet from "@components/profile/profileInfo/indexSeller"
import ProfileInfoBuyerComponet from "@components/profile/profileInfo/indexBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useSession } from "next-auth/react"

export default function ProfileInfo() {
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
            thickness='4px'
            speed='0.65s'
            emptyColor="#b7e4c7"
            color="#0B0E3F"
            size='xl' />
        </Center>
        : session?.user.customer_type == "buyer" ?
          <ProfileInfoBuyerComponet />
          : <ProfileInfoSellerComponet />}

    </>
  )
}

ProfileInfo.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}


//inserire funzione che fa il fetch per i PDF dell'utente