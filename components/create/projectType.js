// Chakra imports
import {
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    Heading,
    GridItem,
    VStack,
    useDisclosure,
    Icon,
} from "@chakra-ui/react";
import React from 'react';

import logoPuro from "@public/Images/logoPuro.png"
import forest from "@public/Images/forest.jpg"

import { useAnimation, motion } from "framer-motion"


import LogoGB from '@public/logoGB.png'
import BackgroudImage from "@public/Images/torbiere1.jpg"

const Create = ({ projectDetails }) => {
    const MotionBox = motion(Box)
    return (
        <>
            <Box m={10}>
                <Box my={10}>
                    <Center>
                        <Image src={LogoGB.src} textShadow='2px 2px #588157' w={"50%"} />
                    </Center>
                    <Center>
                        <Heading fontSize={"50px"} color={"primary"}>
                            {projectDetails.title}
                        </Heading>
                    </Center>
                </Box>
                <Center>
                    <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
                        gap={40} >
                        <GridItem w="full" h="full"><MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                            <Image borderRadius={"10px"} src={BackgroudImage.src} />
                        </MotionBox></GridItem>
                        <GridItem w="full" h="full">
                            <Center h="full" flexDirection="column">
                                <MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <Heading>{projectDetails.title1}</Heading>
                                    <Text>{projectDetails.description1}</Text>
                                </MotionBox>
                            </Center>
                        </GridItem>
                        <GridItem w="full">
                            <Center h="full" flexDirection="column">
                                <MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <Heading>{projectDetails.title2}</Heading>
                                    <Text>{projectDetails.description2}</Text>
                                </MotionBox>
                            </Center>
                        </GridItem>
                        <GridItem w="full"><MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                            <Image borderRadius={"10px"} src={BackgroudImage.src} />
                            </MotionBox></GridItem>
                    </Grid>
                </Center>
                <Center p={2}>

                </Center>
            </Box>
        </>
    );
}

export default Create