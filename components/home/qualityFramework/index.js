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
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={{base: 5, lg: 20 }} >
                    <GridItem order={{ base: 2, lg: 2 }} colSpan={{ base: 2, lg: 1 }}>
                        <Center h="full">
                            <Image alt={"European Commission"} src={Img1.src} borderRadius={10} />
                        </Center>
                    </GridItem>
                    <GridItem order={{ base: 1, lg: 1 }} colSpan={{ base: 2, lg: 1 }}>
                        <Center flexDirection={"column"} gap={6} h="full">
                            <Heading textAlign={"center"} color="primary" fontSize={24}>{t('home.quality_framework.title')}</Heading>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                   <span style={{fontWeight:"bold"}}> {t('home.quality_framework.quantification.title')} </span> {t('home.quality_framework.quantification.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> {t('home.quality_framework.additionality.title')} </span>  {t('home.quality_framework.additionality.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> {t('home.quality_framework.long_term_storage.title')} </span>  {t('home.quality_framework.long_term_storage.description')}
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={MdCheckCircle} color='primary' />
                                    <span style={{fontWeight:"bold"}}> {t('home.quality_framework.sustainability.title')} </span>  {t('home.quality_framework.sustainability.description')}
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
