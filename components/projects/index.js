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
    Link,
} from "@chakra-ui/react";
import React from 'react';

import Card from "@components/card/Card"
import CardBody from "@components/card/CardBody"
import CardHeader from "@components/card/CardHeader"
import { useSpring, animated } from "react-spring";

import logoPuro from "@public/Images/logoPuro.png"
import forest from "@public/Images/forest.jpg"
import biochar from "@public/Images/biochar.jpg"
import NextImage from 'next/image';
import { useAnimation, motion } from "framer-motion"

import Img1 from "@public/Images/BECCS.jpg"
import Img2 from "@public/Images/DACCS.jpg"
import Img3 from "@public/Images/ERW.jpg"
import Img4 from "@public/Images/Biochar.jpg"
import ProjectPartner from "./projectPartner";


const TypeCard = ({ info }) => {
    
    const MotionBox = motion(Box)
    const imagePath = `Images/${info.title.trim()}.jpg`;
    const projectImage = require(`../../public/${imagePath}`).default;
    return (
        <MotionBox maxW="sm" borderWidth="2px" borderRadius="30px" overflow="hidden" h="500px" borderColor={"#24541A"}
        initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>

            <NextImage  w="full" maxH="50%" src={projectImage} alt="Descrizione dell'immagine" />
            <Flex direction="column" justify="space-between" h="45%">
                <Box p="6">
                    <Text fontSize="2xl" fontWeight="bold">
                        {info.title}
                    </Text>
                    <Text mt="2" color="gray.600">
                        {info.description}
                    </Text>
                </Box>
                <Center>
                    <Button mt="4" color={"#ffffff"} backgroundColor={"#24541A"}>
                        <Link href={'/projects/' + info.title.trim().toLowerCase()} >
                            More Info</Link>
                    </Button>
                </Center>

            </Flex>
        </MotionBox>
    )
}



const Create = ({ projects }) => {

   // const MotionTypeCard = motion(TypeCard)
   var partnerImages=[Img1, Img2, Img3, Img4, Img3, Img4, Img3, Img4]
    return (
        <>
            <Box mb={10}>
                <Center>
                    <Heading>
                        Powered By
                    </Heading>
                </Center>
                <Center my={2} mx={10}>
                    <Image  maxW={"220px"}  src={logoPuro.src} />
                </Center>

                <Center p={2} flexDirection={"column"} gap={10} >

                    <Flex justify="center" align="center" direction="column">
                        <Center w={"full"} flexDirection={{ sm: "column", lg: "row" }}>
                            <Box p={10} borderStyle="3px "  > <TypeCard info={projects.uno} /></Box>

                            <Box p={10} borderStyle="3px " ><TypeCard info={projects.due} /></Box>

                            <Box p={10} borderStyle="3px " ><TypeCard info={projects.tre} /></Box>

                        </Center>

                        <Center w={"full"} flexDirection={{ sm: "column", lg: "row" }} >

                            <Box p={10} borderStyle="3px " maxW={{ sm: "100%" }}><TypeCard info={projects.quattro} /></Box>

                            <Box p={10} borderStyle="3px " maxW={{ sm: "100%" }}><TypeCard info={projects.cinque} /></Box>

                        </Center>
                    </Flex>
                </Center>

                <ProjectPartner partnerImages={partnerImages} />
            </Box>
        </>
    );
}

export default Create