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
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";


function AboutUs() {
    let { t } = useTranslation();
    return (
        <>
            <Box minH={"80vh"}>
                <Flex direction={"column"}>
                    <Center>
                        <Heading>
                            ABOUT US
                        </Heading>
                    </Center>
                    <Center>
                        <Text>
                            Coming Soon
                            {t('HELLO_WORLD')}
                        </Text>
                    </Center>
                </Flex>
            </Box>
        </>
    );
}

export default AboutUs;
