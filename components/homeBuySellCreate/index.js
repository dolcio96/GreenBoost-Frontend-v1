import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Center,
    GridItem,
    Flex
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
    desc: "Buy Carbon Credit to reach  sustainability target and help our planet"
},
{
    title: "SELL",
    img: imageSell,
    lk: "/sell",
    desc: "Sell your certified carbon credit on our Marketplace"
},
{
    title: "CREATE",
    img: imageCreate,
    lk: "/create",
    desc: "Be supported in all phases required to certified your Carbon Credit"

},
]

const HomeBuySellCreate = () => {

    return (<>
        <Box mt="20px" mb="20px" >
            <SimpleGrid columns={[1, 1, 1, 3]} gap={10}>
                {data.map(e => <GridItem>
                    <motion.div
                        whileInView={{ scale: [1.0, 1.1, 1.0] }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 1
                        }}>
                        <Center>
                            <Text fontSize='2xl'>{e.title}</Text><Text fontSize='2xl' color='green.400'> .</Text>
                        </Center>
                        <Card {...e} />
                    </motion.div>
                </GridItem>)}
            </SimpleGrid>
        </Box>
    </>)

}

export default HomeBuySellCreate

