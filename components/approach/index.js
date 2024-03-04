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
} from "@chakra-ui/react";
import React from 'react';
import { useSpring, animated } from "react-spring";


import NextImage from 'next/image';
import { useAnimation, motion } from "framer-motion"

import { useTranslation } from "react-i18next";



const ContentBox = ({ title, description, list }) => {
    return (<>
        <Box my={{base:4, md:8}} mx={{base:4, md:48}} bg="primary" borderRadius={"xl"} px="12" py="4">
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


const OurApproach = ({ }) => {
    let { t } = useTranslation();
    return (
        <>
            <Box  >
                <Center>
                    <Heading> {t('our_approach.title')}</Heading>
                </Center>
                <ContentBox title={t('our_approach.criteria.title')} description={t('our_approach.criteria.description')} list={(t('our_approach.criteria.list', { returnObjects: true }))} />
                <ContentBox title={t('our_approach.process.title')} description={t('our_approach.process.description')} list={(t('our_approach.process.list', { returnObjects: true }))} />
                <ContentBox title={t('our_approach.commitment.title')} description={t('our_approach.commitment.description')} list={(t('our_approach.commitment.list', { returnObjects: true }))} />

            </Box>
        </>
    );
}

export default OurApproach