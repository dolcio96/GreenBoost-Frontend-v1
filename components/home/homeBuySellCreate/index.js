import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Stack,
    Center,
    GridItem,
    Heading,
    Highlight
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"
import { useTranslation } from "react-i18next";
import imageBuy from "@public/Images/imageBuy.jpg"
import imageSell from "@public/Images/imageSell.jpg"
import imageCreate from "@public/Images/imageCreate.jpg"

import Card from "@components/home/homeBuySellCreate/card";



const HomeBuySellCreate = () => {
    const MotionHeading = motion(Heading)
    let { t } = useTranslation();
    const data = [{
        title: t('home.sell_buy_create.buy.title'),
        img: imageBuy,
        lk: "/projects",
        desc: t('home.sell_buy_create.buy.description')
    },
    {
        title: t('home.sell_buy_create.sell.title'),
        img: imageSell,
        lk: "/sell",
        desc: t('home.sell_buy_create.sell.description')
    },
    {
        title: t('home.sell_buy_create.create.title'),
        img: imageCreate,
        lk: "/create",
        desc: t('home.sell_buy_create.create.description')
    
    },
    ]
    return (<>


        <Box py={{ base: "20px", md: "40px" }}>
            <SimpleGrid columns={[1, 1, 1, 3]} gap={0}>
                {data.map((e, index) => <GridItem key={index}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                        <Center>
                            <Text fontSize='3xl' fontWeight={"bold"}>{e.title}</Text><Text fontSize='3xl' color='green.400' fontWeight={"bold"}> .</Text>
                        </Center>
                        <Card {...e} />
                    </motion.div>
                </GridItem>)}
            </SimpleGrid>
        </Box>
    </>)

}

export default HomeBuySellCreate

