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

import imageBuy from "@public/Images/imageBuy.jpg"
import imageSell from "@public/Images/imageSell.jpg"
import imageCreate from "@public/Images/imageCreate.jpg"

import Card from "@components/homeBuySellCreate/card";

const data = [{
    title: "BUY",
    img: imageBuy,
    lk: "/projects",
    desc: "One place to find them all"
},
{
    title: "SELL",
    img: imageSell,
    lk: "/sell",
    desc: "One place to sell them"
},
{
    title: "CREATE",
    img: imageCreate,
    lk: "/create",
    desc: "One place to \"rule\" them, with infos and guidelines"

},
]

const HomeBuySellCreate = () => {
    const MotionHeading = motion(Heading)

    return (<>


        <Box py={{ base: "20px", md: "40px" }}>
            <SimpleGrid columns={[1, 1, 1, 3]} gap={0}>
                {data.map(e => <GridItem>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0, 0.71, 0.2, 1.01] }}>
                        <Center>
                            <Text fontSize='3xl'>{e.title}</Text><Text fontSize='2xl' color='green.400'> .</Text>
                        </Center>
                        <Card {...e} />
                    </motion.div>
                </GridItem>)}
            </SimpleGrid>
        </Box>
    </>)

}

export default HomeBuySellCreate

