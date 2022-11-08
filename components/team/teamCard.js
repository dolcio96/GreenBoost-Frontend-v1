import React from "react"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"

import { useRouter } from "next/router"
import { FaLinkedin } from 'react-icons/fa';




const TeamCard = ({ info }) => {

    const MotionBox = motion(Box)
    const openLinkedin = () => {
        const newWindow = window.open(info.linkedin, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (

        <>
            <Center py={6}>
                <MotionBox
                    maxW={{ base: '270px', sm: "300px", md: "350px" }}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    overflow={'hidden'}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                >
                    <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                        }
                        objectFit={'cover'}
                    />
                    <Flex justify={'center'} mt={-12}>
                        <Avatar
                            size={'xl'}
                            src={
                                info.img.src
                            }
                            alt={'Author'}
                            css={{
                                border: '2px solid white',
                            }}
                        />
                    </Flex>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {info.nome}
                            </Heading>
                            <Text color={'gray.500'}>{info.role}</Text>
                        </Stack>
                        <Button
                            w={'full'}
                            mt={8}
                            bg={"primary"}
                            color={'white'}
                            rounded={'md'}
                            rightIcon={<FaLinkedin />}
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                            onClick={() => openLinkedin()}

                        >
                            Follow on Linkedin
                        </Button>
                    </Box>
                </MotionBox>
            </Center>

        </>
    )
}

export default TeamCard
