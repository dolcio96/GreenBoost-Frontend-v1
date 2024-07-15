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
import { useRouter } from "next/router";

const Signin = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" })
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.username);
    
    const result = await signIn("credentials", {
      redirect: false,
      username:credentials.username,
      password:credentials.password,
    });
    console.log(result)
    if (result.error || result === undefined) {
      setError(result.error);
    } else {
      
      router.push("/profile/profile-overview");
    }
  };



  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Accedi al tuo account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              per usufruire di tutte le nostre novità
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email </FormLabel>
                <Input id="email" type="email" value={credentials.username} onChange={(e) => { setCredentials({ ...credentials, username: e.target.value }) }} />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input id="password" type="password" value={credentials.password} onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }} />
              </FormControl>
              <Stack spacing={4}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox >Ricorda</Checkbox>
                  <Link color={'primary'}>Password dimenticata?</Link>
                </Stack>
                <Button variant='normalButton' onClick={handleSubmit}>
                  Sign in
                </Button>
                <Center>{error && <Text style={{ color: "red" }}>{error}</Text>}</Center>
                <Center>
                  <Text fontWeight={'bold'}>
                    Vuoi registrarti al nostro sito?
                  </Text>
                </Center>
                <Button variant='normalButton' onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSeVoJ5wr8YC6xumFZZ8WSbxRR5Skf7Rwc0enn9mCBUrlgDf2A/viewform?usp=sf_link", "_blank")}>
                  Contattaci
                </Button>
              
                {/*
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
                 */}
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Signin;