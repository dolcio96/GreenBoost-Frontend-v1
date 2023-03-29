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
import React from 'react';

import { useSpring, animated } from "react-spring";

function Number({ n, dly }) {
    const AnimatedText = animated(Text);
    const { number } = useSpring({
        reset: true,
        from: { number: 0 },
        number: n,
        delay: dly,
        config: { mass: 1, tension: 20, friction: 10 }
    });

    return <AnimatedText>
        {number.to((n) => n.toFixed(0))}
    </AnimatedText>

}



const Create = () => {

    return (
        <>
            <Box minH={"80vh"}>
                <Flex direction={"column"}>
                    <Center>
                        <Heading>
                            CREATE
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

export default Create