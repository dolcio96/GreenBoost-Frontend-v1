import React from 'react'

import {
    Box,
    Heading,
    Container,
    Text,
    LinkBox,
    LinkOverlay,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image,
    Grid,
    Center,
    GridItem,
    Flex
} from '@chakra-ui/react';
import imageCreate from "@public/Images/imageCreate.jpg"
const Card = (props) => {
    console.log(props.img.src);
    console.log(imageCreate.src);
    return (<>

        <Flex p={5} w="full" alignItems="center" justifyContent="center">
            <LinkBox
                maxW="sm"
                borderWidth="1px"
                rounded="xl"
                shadow="xl"
                position="relative"
                href={props.lk}>
                <LinkOverlay href={props.lk}>
                    <Image 
                        src={props.img.src}
                        alt='abc'
                        rounded="xl"
                    />
                    <Box m="3" textAlign="center">
                        <Center>
                            <Text fontSize='xl' color='green.600'>{props.desc}</Text>
                        </Center>
                    </Box>
                </LinkOverlay>
            </LinkBox >

        </Flex>
    </>)

}

export default Card

