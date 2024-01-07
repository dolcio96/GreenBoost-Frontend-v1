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
import Img1 from "@public/Images/carbonCreditProcess.png"

function ReasonForBuy() {
    let { t } = useTranslation();
    return (
        <>
           <Box>
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={{base: 5, lg: 20 }} >
                    
                    <GridItem order={ 2 }>
                        <Center flexDirection={"column"} gap={6} h="full">
                           
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                   <span style={{fontWeight:"bold"}}>{t('home.reason_for_buy.reason1.title')}</span> {t('home.reason_for_buy.reason1.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}>{t('home.reason_for_buy.reason2.title')}</span>  {t('home.reason_for_buy.reason2.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}>{t('home.reason_for_buy.reason3.title')}</span>  {t('home.reason_for_buy.reason3.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}>{t('home.reason_for_buy.reason4.title')}</span>  {t('home.reason_for_buy.reason4.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> {t('home.reason_for_buy.reason5.title')} </span>  {t('home.reason_for_buy.reason5.description')}
                                </ListItem>
                            </List>
                        </Center>
                    </GridItem>
                    <GridItem order={ 1 } >
                        <Center h="full">
                        <Heading textAlign={"center"} color="primary" fontSize={24}>{t('home.reason_for_buy.title')}</Heading>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default ReasonForBuy;
