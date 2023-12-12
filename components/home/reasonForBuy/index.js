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
import Img1 from "@public/Images/CarbonCreditProcess.png"

function ReasonForBuy() {
    let { t } = useTranslation();
    return (
        <>
           <Box>
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={40} >
                    
                    <GridItem order={ 1 }>
                        <Center flexDirection={"column"} gap={6} h="full">
                            <Heading textAlign={"center"} color="primary" fontSize={24}>Acquistare un credito di carbonio di alta qualità significa non solo rimuovere una tonnellata di CO2 per 100+ anni, ma anche:</Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                   <span style={{fontWeight:"bold"}}>Rafforzare il Tuo Marchio: </span> Eleva la tua identità aziendale, posizionando il tuo marchio come leader sostenibile
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> Anticipare la Concorrenza: </span>  Distinguiti e guida la tua azienda verso una gestione responsabile
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> Allinearti con le Richieste di Mercato: </span>  Soddisfa le aspettative del mercato moderno, attirando consumatori e fornitori
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> Supportare le Comunità Locali: </span>  Fai la differenza e sostieni comunità in cui si sviluppano i progetti virtuosi
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> Costruire un Futuro Sostenibile: </span>  Investi e aiuta a plasmare un mondo dove la responsabilità aziendale è alla base di ogni decisione.
                                </ListItem>
                            </List>
                        </Center>
                    </GridItem>
                    <GridItem order={ 2 } >
                        <Center h="full">
                            <Image src={Img1.src} borderRadius={10} />
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default ReasonForBuy;
