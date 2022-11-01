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
  Center,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { FcGoogle } from 'react-icons/fc';
import { useState } from "react"
import { signIn } from "next-auth/react"

const Signin = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our <Link color={'green.400'}>features</Link> 🌲
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
                <Input id="email" type="email" value={credentials.username} onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input id="password" type="password" value={credentials.password} onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'green.400'}>Forgot password?</Link>
                </Stack>
                <Button onClick={() => { signIn('credentials', { username: credentials.username, password: credentials.password }) }}
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
                <Center>
                  <Button onClick={() => signIn("github")}
                    w={'full'}
                    maxW={'md'}
                    variant={'outline'}
                    leftIcon={<FcGoogle />}>
                    <Center>
                      <Text>Sign in with Google</Text>
                    </Center>
                  </Button>
                </Center>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Signin;