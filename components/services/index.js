// Chakra imports
import {
    Box,
    Button,
    Flex,
    Center,
    Image,
    Text,
    Heading,
    Link,
    List,
    ListItem,
    ListIcon,
    UnorderedList,
    VStack
} from "@chakra-ui/react";
import React from 'react';
import { useSpring, animated } from "react-spring";


import NextImage from 'next/image';
import { useAnimation, motion } from "framer-motion"

import { useTranslation } from "react-i18next";

import funnelImg from "@public/Images/funnel.jpeg"



const ContentBox1 = ({ title, description, list }) => {
    return (<>
        <Box my={{ base: 4, md: 8 }} mx={{ base: 4, md: 48 }} bg="primary" borderRadius={"xl"} px="12" py="4">
            <Center m={4}>
                <Heading size={"lg"}> {title}</Heading>
            </Center>
            <Box>
                <Text size={"lg"}>{description}</Text>

                <UnorderedList>
                    {list.map((item) => (
                        <ListItem key={item.title} >
                            <Box flexDirection={"row"}>
                                <Text fontSize={"md"}>  <b>{item.title}</b>
                                    {item.description}</Text>
                            </Box>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
        </Box>
    </>);
};

const ContentBox2 = ({ img }) => {
    return (<>
        <Box my={{ base: 4, md: 8 }} mx={{ base: 4, md: 48 }} px="12" py="4">
            <Box>
               <Image src={img.src}/>
            </Box>
        </Box>
    </>);
};



const OurApproach = ({ }) => {
    let { t } = useTranslation();
    return (
        <>
            <Box  >
                <Center>
                    <VStack spacing={10} px={{base:8, lg:40}}>
                        <Heading textAlign={"center"}> {t('services.title')}</Heading>
                        {/*<Button> {t('services.button')}</Button>*/}
                    </VStack>
                </Center>
                <ContentBox1 title={t('services.highQualityCarbon.title')} description={t('services.highQualityCarbon.description')} list={(t('services.highQualityCarbon.list', { returnObjects: true }))} />
                <ContentBox2 img = {funnelImg} />
                <ContentBox1 title={t('services.endToEnd.title')} description={t('services.endToEnd.description')} list={(t('services.endToEnd.list', { returnObjects: true }))} />

            </Box>
        </>
    );
}

export default OurApproach