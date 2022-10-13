
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
  
  import { ReactElement, useState } from "react"
  import Layout from "@components/layout"
  import Head from "@components/head"
  import LoginComponet from "@components/auth/signin"
  import { getProviders, signIn } from "next-auth/react"
  
  
  export default function Login({ providers }) {
    const [state, setState] = useState({ username: "", password: "" })
    return (
      <>
        <Head
          title="GreenBoost: Login"
          description="GreenBoost: Login"
        />
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Sign in to your account</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input id="email" type="email" value={state.username} onChange={(e) => { setState({ username: e.target.value }) }} />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input id="password" type="password" value={state.password} onChange={(e) => { setState({ password: e.target.value }) }} />
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    <Checkbox>Remember me</Checkbox>
                    <Link color={'blue.400'}>Forgot password?</Link>
                  </Stack>
                  <Button onClick={() => signIn('credentials', { username: state.username, password: state.password })}
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    )
  }
  
  Login.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
  }
  
  
  export async function getServerSideProps(context) {
    const providers = await getProviders()
    console.log(providers)
    return {
      props: { providers },
    }
  }