
import {
    Box,
    Center,
    Text,
    Heading,
    Link,
    Button,
} from "@chakra-ui/react";

import React, { useState, useEffect } from 'react';

import PopUpContactUs from '@components/home/hero/popUp'

import { useTranslation } from "react-i18next";
import { red } from "@mui/material/colors";




const Create = () => {

    let { t } = useTranslation();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopUpOpen(!isPopUpOpen);
    };
    const [animateComponents, setAnimateComponents] = useState(false);
    const toggleAnimation = () => {
        setAnimateComponents(!animateComponents);
    };
    return (
        <>
            <Center minH={"90vh"} >
                <Box  p={8}>
                    <Box mb={1} >
                        <Center p={2} flexDirection={"column"}>
                            <Heading>CREATE</Heading>
                            <Text>Coming Soon</Text>
                        </Center>
                    </Box>
                    <Center p="4" >
                        <Button rounded="full" h={"50px"} color={"#ffffff"} backgroundColor={"quaternary"} _hover={{ color: "quaternary", backgroundColor: "#ffffff", borderWidth: "2px", borderColor: "quaternary" }} onClick={() => {
                            togglePopUp();
                            toggleAnimation();
                        }}><Text fontSize={20}> Entra nell'ecosistema GreenBoost 🌍</Text></Button>
                    </Center>

                    <PopUpContactUs isOpen={isPopUpOpen} onClose={togglePopUp} />
                </Box>
            </Center>
           
        </>
    );
}

export default Create