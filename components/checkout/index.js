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
import CheckoutFormComponent from "@components/checkoutForm"


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
                        <CheckoutFormComponent />
                    </Center>
                </Flex>
            </Box>
        </>
    );
}

export default Checkout;
