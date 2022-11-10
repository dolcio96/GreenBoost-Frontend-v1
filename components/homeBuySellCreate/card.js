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

const Card = (props) => {
    return (<>

        <Flex p={5} w="full" alignItems="center" justifyContent="center" >
            <LinkBox
                maxW="sm"

                rounded="xl"
                shadow="xl"
                position="relative"
                href={props.lk}
                bg="white">
                <LinkOverlay href={props.lk}>
                    <Image
                        h={'250px'}
                        w={'full'}
                        src={props.img.src}
                        alt='abc'
                        rounded="xl"
                        bg="white"
                        opacity={"0.9"}
                    />
                    <Center h="80px">
                        <Box p="3" textAlign="center" >
                            <Center>
                                <Text fontSize='2xl' color='quaternary'>{props.desc}</Text>
                            </Center>
                        </Box>
                    </Center>
                </LinkOverlay>
            </LinkBox >

        </Flex>
    </>)

}

export default Card

