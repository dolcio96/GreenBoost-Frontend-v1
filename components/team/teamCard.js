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
            <Center>
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



                    <Box p={6}>
                        <Stack spacing={5} align={'center'}>
                            <Flex justify={'center'}>
                                <Avatar
                                    size={'xl'}
                                    src={
                                        info.img.src
                                    }
                                    alt={'Author'}
                                />
                            </Flex>
                            <Box>
                                <Heading fontSize={'3xl'} fontWeight={500} fontFamily={'body'}>
                                    {info.nome}
                                </Heading>
                                <Text color={'gray.500'} textAlign='center' fontSize={"lg"}>{info.role}</Text>
                            </Box>
                            <Button
                                w={'full'}
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
                        </Stack>

                    </Box>
                </MotionBox>
            </Center>

        </>
    )
}

export default TeamCard
