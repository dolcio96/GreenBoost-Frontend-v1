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
import { useRouter } from 'next/router'

import Img1 from "@public/Images/carbonCreditProcess.png"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";


function CarbonCreditDescription() {
    let { t } = useTranslation();
    const router = useRouter()
    return (
        <>
            <Box>
                <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: 20, lg: 40 }} my={10} mx={{base: 5, lg: 20 }} >
                    <GridItem order={{ base: 2, lg: 1 }} >
                        <Center h="full">
                            <Image alt={"Carbon Credit Process"} src={Img1.src} borderRadius={10} />
                        </Center>
                    </GridItem>
                    <GridItem order={{ base: 1, lg: 2 }}>
                        <Center flexDirection={"column"} gap={6} h="full">
                            <Heading textAlign={"center"} color="primary" fontSize={24}>
                                {t('home.carbon_credit_description.title')}
                            </Heading>
                            <Text C textAlign={"center"}>
                                {t('home.carbon_credit_description.description')}
                            </Text>
                            <Button p={{ base: 2, lg: 3 }}  whiteSpace="normal" height="auto" blockSize="auto" color="tertiary" bg="primary" _hover={{ color: "tertiary", bg: "quaternary" }} onClick={() => router.push('/projects')}>
                              {t('home.carbon_credit_description.btn')}  
                            </Button>
                        </Center>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}

export default CarbonCreditDescription;
