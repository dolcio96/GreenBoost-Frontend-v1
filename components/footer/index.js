import React from 'react'
import { ReactNode } from 'react';

import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  Image,
  useColorModeValue,
  Center
} from '@chakra-ui/react';

import LogoGB from '@public/logoGB.png'

import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const SocialButton = ({
  children,
  label,
  href,
  bgColor,
}) => {
  return (
    <chakra.button
      bg={bgColor}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      color={"#FFFFFF"}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        color: bgColor
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const Footer = () => {
  return (<>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Center gap={2} flexDirection={"column"}>
          <Box w={"50%"} as={"a"} href={"/"} display={"flex"} flexDirection={"row"}>
            <Image src={LogoGB.src} color={useColorModeValue('gray.700', 'white')} alt="LogoFooter" />
          </Box>
          <Text fontSize={'sm'}>
            © {new Date().getFullYear()} GreenBoost. All rights reserved
          </Text>
          <Center flexDirection={"column"} gap={2}>
            <Text> Visita il nostro profilo Linkedin</Text>
            <SocialButton label={'YouTube'} href={"https://www.linkedin.com/company/greenboost/"} bgColor={"#0077B5"}>
              <FaLinkedin />
            </SocialButton>
          </Center>
        </Center>
      </Container>
    </Box>
  </>)

}

export default Footer



