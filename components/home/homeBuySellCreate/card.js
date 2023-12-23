import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Stack,
    Center,
    GridItem,
    Heading,
    Highlight,
    Flex,
    Button,
    Link,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import imageBuy from "@public/Images/buy.jpeg"
import imageSell from "@public/Images/sell.jpeg"
import imageCreate from "@public/Images/create.jpeg"

import NextImage from 'next/image';


const Card = ({ info }) => {
    let { t } = useTranslation();
    const MotionBox = motion(Box)
    //const imagePath = `Images/${(info.title.trim().toLowerCase())}.jpg`;
    //const projectImage = require(`../../public/${imagePath}`).default;
    return (
        <LinkBox maxW="sm" borderWidth="1px" borderRadius="30px" overflow="hidden" h="500px" borderColor={"#24541A"}
        > <LinkOverlay
        href={info.lk}
        >
                <NextImage width={0}
                    height={0}
                    sizes="100vw" src={info.img.src} style={{ width: '100%', height: 'auto' }} alt="Descrizione dell'immagine" />
                <Flex direction="column" justify="space-between" >
                    <Box p="6">
                        <Center>
                            <Text fontSize="xl" fontWeight="bold" textAlign={"center"} color="gray.600">
                                {info.desc}
                            </Text>
                        </Center>
                    </Box>

                </Flex>
            </LinkOverlay>
        </LinkBox>)

}

export default Card

