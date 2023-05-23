import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useForm, Controller } from 'react-hook-form'
import { userService } from 'services';
import { signIn } from "next-auth/react"

const Signup = () => {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(user) {
    return userService.register(user).then((response) => {
      if (response.ok) {
        signIn('credentials', { username: user.email, password: user.password.padEnd(60, ' ') })
        router.push('/')
      } else {
        alert(response.status)
      }
    })
  }

  function registerStripeAccount() {
    fetch("/api/stripe/create-account", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) =>
      fetch("/api/stripe/account-link", {
        method: "POST",
        headers: { 'Accept': 'application/json', "Content-Type": "application/json" },
        body:  JSON.stringify(data)
      })
      )
      /* .then((res) => res.json()).then((data2) => console.log(data2))*/
  }

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'3lg'} py={12} px={6} w={{ md: "50%", lg: "45%", '2xl': "30%" }}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our features 🌲
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
            w={{ md: "100%" }}>

            <Stack spacing={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <FormLabel>Company Name</FormLabel>
                  <Input type="text" {...register('companyName')} />
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <FormLabel>TAX Number</FormLabel>
                  <Input type="text" {...register('taxNumber')} />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="text" {...register('email')} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} {...register('password')} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Role</FormLabel>
                  <Controller
                    render={({ field: { onChange, value } }) => (
                      <RadioGroup name='type' onChange={onChange} value={value}>
                        <HStack spacing='24px' justifyContent={"center"}>
                          <Radio variant={"normalRadio"} value='seller'>Seller</Radio>
                          <Radio variant={"normalRadio"} value='buyer'>Buyer</Radio>
                        </HStack>
                      </RadioGroup>
                    )}
                    name="type"
                    control={control}
                  />

                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    isLoading={isSubmitting}
                    type='submit'
                    loadingText="Submitting"
                    size="lg"
                    variant="normalButton">
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'primary'} href={"signin"}>Login</Link>
                  </Text>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Button
        onClick={registerStripeAccount}
        size="lg"
        variant="normalButton">
        Create Account      </Button>

    </>
  );
}

export default Signup