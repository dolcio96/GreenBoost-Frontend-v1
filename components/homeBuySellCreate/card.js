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
                    />
                    <Box p="3" textAlign="center" >
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

