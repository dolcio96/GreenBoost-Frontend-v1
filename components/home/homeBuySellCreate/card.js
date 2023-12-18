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

import NextImage from 'next/image';

const CardComponent = ({ iagepath }) => {
    let { t } = useTranslation();
    const MotionBox = motion(Box)
    const img = require(`../../public/${imagePath}`).default;
    return (
        <MotionBox maxW="sm" borderWidth="2px" borderRadius="30px" overflow="hidden" h="500px" borderColor={"#24541A"}
        initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>

            <NextImage  w="full" maxH="50%" src={img} alt="Descrizione dell'immagine" />
            <Flex direction="column" justify="space-between" h="45%">
                <Box p="6">
                    <Text mt="2" color="gray.600">
                    {t('projects.'+info.title.toLowerCase()+'.description')}
                    </Text>
                </Box>
            </Flex>
        </MotionBox>
    )
}





const Card = (props) => {
    return (<>
           
        <Flex p={5} w="full" alignItems="center" justifyContent="center" >
            <LinkBox
                maxW="sm"

                rounded="xl"
                shadow="xl"
                position="relative"
                // href={props.lk}
                bg="white">
                <LinkOverlay
                // href={props.lk}
                >
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

