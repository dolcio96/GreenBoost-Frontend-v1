// Chakra imports
import {
    Box,
    Button,
    Flex,
    Center,
    Image,
    Text,
    Heading,
    Link,
} from "@chakra-ui/react";
import React from 'react';
import { useSpring, animated } from "react-spring";
import { useState } from 'react';
import logoPuro from "@public/Images/partner/logo_Puro.png"
import logoCSMT from "@public/Images/partner/logo_CSMT.png"
import logoGMAmbiente from "@public/Images/partner/logo_GM_Ambiente.png"

import PopUpContactUs from '@components/popupContactUs'
//import forest from "@public/Images/forest.jpg"
//import biochar from "@public/Images/biochar.jpg"
import NextImage from 'next/image';
import { useAnimation, motion } from "framer-motion"

//import Img1 from "@public/Images/beccs.jpg"
//import Img2 from "@public/Images/daccs.jpg"
//import Img3 from "@public/Images/erw.jpg"
//import Img4 from "@public/Images/biochar.jpg"
import ProjectPartner from "./projectPartner";
import { useTranslation } from "react-i18next";

const TypeCard = ({ info, animateComponents }) => {

    let { t } = useTranslation();
    const MotionBox = motion(Box)
    const imagePath = `Images/${(info.title.trim().toLowerCase())}.jpg`;
    const projectImage = require(`../../public/${imagePath}`).default;
    return (
        <MotionBox maxW="sm" borderWidth="2px" borderRadius="30px" overflow="hidden" h="500px" borderColor={"#24541A"}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <Flex direction={"column"} h="100%">
                <NextImage w="full" src={projectImage} alt="Descrizione dell'immagine" />
                <Flex direction="column" display={"flex"} h="70%" justifyContent={"space-between"} >
                    <Box p="4" >
                        <Text fontSize="2xl" fontWeight="bold">
                            {t('projects.' + info.title.toLowerCase() + '.title')}
                        </Text>
                        <Text fontSize="sm" mt="2" color="gray.600">
                            {t('projects.' + info.title.toLowerCase() + '.description')}
                        </Text>
                    </Box>
                    <Center p="4" >
                        <Button color={"#ffffff"} backgroundColor={"quaternary"} _hover={{ color: "quaternary", backgroundColor: "#ffffff", borderWidth: "2px", borderColor: "quaternary" }}>
                            <Link href={'/projects/' + info.title.trim().toLowerCase()} _hover={{ textDecoration: "none" }}>
                                {t('projects.more_info')}</Link>
                        </Button>
                    </Center>
                </Flex>
            </Flex>
        </MotionBox>
    )
}



const Projects = ({ projects }) => {

    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopUpOpen(!isPopUpOpen);
    };
    const [animateComponents, setAnimateComponents] = useState(false);
    const toggleAnimation = () => {
        setAnimateComponents(!animateComponents);
    };

    // const MotionTypeCard = motion(TypeCard)
    var partnerImages = [logoPuro, logoCSMT, logoGMAmbiente]
    return (
        <>
            <Box mb={10}>
                <Center>
                    <Heading>
                        Powered By
                    </Heading>
                </Center>
                <Center my={2} mx={10}>
                    <Image maxW={"220px"} src={logoPuro.src} />
                </Center>
                <Center my="40px">


                    <Button rounded="full" h={"50px"} color={"#ffffff"} backgroundColor={"quaternary"} _hover={{ color: "quaternary", backgroundColor: "#ffffff", borderWidth: "2px", borderColor: "quaternary" }} onClick={() => {
                        togglePopUp();
                        toggleAnimation();
                    }}><Text fontSize={20}> Compensa ora le tue emissioni 🌍</Text></Button>
                </Center>
                {/* Il componente PopUpContactUs, chiamato solo se isPopUpOpen è true */}
                <PopUpContactUs isOpen={isPopUpOpen} onClose={togglePopUp} />

                <Center  flexDirection={"column"} gap={10} >

                    <Flex justify="center" align="center" direction="column">
                        <Center w={"full"} flexDirection={{ base: "column", lg: "row" }}>
                            <Box p={10} borderStyle="3px "  > <TypeCard info={projects.uno} animateComponents={animateComponents} /></Box>

                            <Box p={10} borderStyle="3px " ><TypeCard info={projects.due} animateComponents={animateComponents} /></Box>

                            <Box p={10} borderStyle="3px " ><TypeCard info={projects.tre} animateComponents={animateComponents} /></Box>
                        </Center>

                        <Center w={"full"} flexDirection={{ base: "column", lg: "row" }} >

                            <Box p={10} borderStyle="3px " maxW={{ sm: "100%" }}><TypeCard info={projects.quattro} animateComponents={animateComponents} /></Box>

                            <Box p={10} borderStyle="3px " maxW={{ sm: "100%" }}><TypeCard info={projects.cinque} animateComponents={animateComponents} /></Box>

                        </Center>
                    </Flex>
                </Center>

                {/*  <ProjectPartner partnerImages={partnerImages} /> */}
            </Box>
        </>
    );
}

export default Projects