
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';


import Layout from "@components/layout"
import Head from "@components/head"
import SigninComponet from "@components/auth/signin"
import { ReactElement, useState, useEffect } from "react"
import {useSession } from "next-auth/react"
import { useRouter } from 'next/router';

export default function Login({ providers }) {
  const { data: session} = useSession()
  const router = useRouter();
  
  return (
    <>
      <Head
        title="GreenBoost: Login"
        description="GreenBoost: Login"
      />
     <SigninComponet a = "0"/>
    </>
  )
}

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
