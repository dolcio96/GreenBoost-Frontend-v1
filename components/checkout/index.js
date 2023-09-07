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



function Checkout() {
    return (
        <>
            <Box minH={"80vh"}>
                <Flex direction={"column"}>
                    <Center>
                        <Heading>
                            CHECKOUT
                        </Heading>
                    </Center>
                    <Center>
                        <Text>
                            Coming Soon
                        </Text>
                    </Center>
                </Flex>
            </Box>
        </>
    );
}

export default Checkout;
