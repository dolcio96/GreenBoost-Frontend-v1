import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { useAnimation, motion } from "framer-motion"

import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Image,
  Flex,
  Center,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup

} from '@chakra-ui/react';

import BackgroudImage from "@public/Images/heroForest2.jpg"
//import Fiume from "@public/Video/fiume.gif"


const Hero = () => {
  const BGImage = BackgroudImage.src
  const { isOpen, onOpen, onClose } = useDisclosure()

  const MotionText = motion(Text)
  const MotionStack = motion(Stack)


  return (
    <>
      <Flex
        backgroundImage={BGImage}
        backgroundRepeat={"no-repeat"}
        backgroundSize={'cover'}
        h='100vh'
      >

        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 40, md: 36 }}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}
              color={'quaternary'}

            >
              <MotionText
                color={'quaternary'}
                textShadow='2px 2px #588157'
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
              >
                Offset our future.</MotionText>
              <MotionText as={'span'} color={'primary'} textShadow='2px 2px #344E41'
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1, ease: [0, 0.71, 0.2, 1.01] }}>
                Together.
              </MotionText>
            </Heading>
            <MotionText borderRadius={"20px"} backgroundColor={"rgba(0, 0, 0, 0.8)"} color={{ base: 'white', sm: 'white' }} fontSize={{ base: "lg", sm: "2xl" }}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
              p='10px'
            >
              Take part to the green revolution and help us build a new ecosystem, a better one, with zero emissions.

            </MotionText>
            <MotionStack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0, 0.71, 0.2, 1.01] }}
            >
              <Button
                color={"quaternary"}
                bg={"tertiary"}
                rounded={'full'}
                px={6}
                _hover={{
                  color: 'tertiary',
                  bg: 'quaternary',
                }}
                onClick={onOpen}
                _focus={{ outline: "none" }}

              >
                Stay tuned

              </Button>
              <Box>
                <Icon
                  as={Arrow}
                  color={"white"}
                  w={71}
                  position={'absolute'}
                  right={-71}
                  top={'10px'}
                />
                <Text
                  fontSize={'lg'}
                  color={"black"}
                  fontFamily={'Caveat'}
                  position={'absolute'}
                  right={'-125px'}
                  top={'-15px'}
                  transform={'rotate(10deg)'}>
                  Subscribe now!
                </Text>
              </Box>
            </MotionStack>
          </Stack>
        </Container>
      </Flex>


      <Modal isOpen={isOpen} onClose={onClose} isCentered >
        <ModalOverlay
          backdropFilter='blur(3px) hue-rotate(50deg)'
        />
        <ModalContent >
          <ModalHeader ustifyContent={"center"} textAlign={"center"}>Stay Tuned, Subscribe Now!</ModalHeader>

          <ModalBody>
            <Stack direction={'column'} spacing={6}>
              <Text>Send us your email if you are interested in the project</Text>
              <FormControl>
                <Input placeholder='Email' className="inputFieldNormal" />
              </FormControl>
              <Stack direction='row'>
                <Text>Chose your side</Text>
                <RadioGroup >
                  <Stack direction='row'>
                    <Radio value='Seller'>Seller</Radio>
                    <Radio value='Buyer'>Buyer</Radio>
                  </Stack>
                </RadioGroup>

              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent={"center"}>

            <Button variant={"normalButton"} mr={3} justifyContent={"center"}>
              Subscribe Now
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>)

}

export default Hero

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="black"
    />
  ),
});