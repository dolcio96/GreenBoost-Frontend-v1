
import {
  Spinner,
  Center,
} from '@chakra-ui/react';

import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileProjectSellerComponet from "@components/profile/profileProjectSeller"
import ProfileProjectBuyerComponent from "@components/profile/profileProjectsBuyer"
import ProfileLayout from "@components/layout/profileLayout"
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter();

  return (

    <>
      <Head
        title="GreenBoost: Profile Projects"
        description="GreenBoost: Profile Projects"
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
          <ProfileProjectBuyerComponent />
          : <ProfileProjectSellerComponet />}
    </>
  )
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
