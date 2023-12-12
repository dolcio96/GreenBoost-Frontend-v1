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
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";

import { MdCheckCircle } from "react-icons/md";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Img1 from "@public/Images/EuropeanCommission.png"
function QualityFramework() {
    let { t } = useTranslation();
    return (
        <>
            <Box>
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={20} >
                    <GridItem order={{ base: 2, lg: 1 }} colSpan={{ base: 3, lg: 1 }}>
                        <Center h="full">
                            <Image src={Img1.src} borderRadius={10} />
                        </Center>
                    </GridItem>
                    <GridItem order={{ base: 1, lg: 2 }} colSpan={{ base: 3, lg: 2 }}>
                        <Center flexDirection={"column"} gap={6} h="full">
                            <Heading textAlign={"center"} color="primary" fontSize={24}>GreenBoost offre crediti di carbonio che certificano la rimozione di CO₂ per 100+ anni, in accordo con il nuovo EU framework  QU.A.L.ITY:​</Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                   <span style={{fontWeight:"bold"}}> QU </span> (quantification): misurazione accurata dell'effettiva cattura della CO₂
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> A </span>  (additionality): addizionalità rispetto allo status quo
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> L </span>  (long term storage): possibilità di verificare lo storage permanente della CO₂ a seguito della cattura
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> ITY </span>  (sustainability): allineamento con i «sustainable development Goals» dell'Onu​
                                </ListItem>
                            </List>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default QualityFramework;
