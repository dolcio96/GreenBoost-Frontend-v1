// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
    Heading,
    GridItem,
    VStack,
    useDisclosure,
    Icon,
    Divider
} from "@chakra-ui/react";


import Img1 from "@public/Images/CarbonCreditProcess.png"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


function CarbonCreditDescription() {
    let { t } = useTranslation();
    return (
        <>
            <Box>
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={20} >
                    <GridItem order={{ base: 2, lg: 1 }} >
                        <Center h="full">
                            <Image src={Img1.src} borderRadius={10} />
                        </Center>
                    </GridItem>
                    <GridItem order={{ base: 1, lg: 2 }}>
                        <Center flexDirection={"column"} gap={6} h="full">
                            <Heading textAlign={"center"} color="primary">Cosa sono i Crediti di Carbonio "di alta qualità"?</Heading>
                            <Text textAlign={"center"}>Si tratta di certificati negoziabili rappresentanti la rimozione di 1 tonnellata di CO₂, o altri gas equivalenti, per 100+ anni dall'atmosfera.</Text>
                            <Button color="tertiary" bg="primary" _hover={{ color: "tertiary", bg: "quaternary" }}> Scopri quali sono le metodologie che garantiscono un tale risultato!</Button>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default CarbonCreditDescription;
