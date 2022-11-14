import React, { useState } from "react";


import {
    Box,
    Text,
    SimpleGrid,
    Center,
    GridItem,
    Heading,
    Highlight,
    Flex
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"

const Phrase = (props) => {
    const MotionHeading = motion(Heading)
    const { text, highlight } = props;
    return (
        <>

                    <Center textAlign={"center"}>
                        <MotionHeading color={"white"}

                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
                        >
                            <Highlight
                                query={highlight}
                                styles={{ px: '2', pb: '2', rounded: 'full', bg: "rgb(255, 255, 255, 0.3)" }}
                            >
                                {text}
                            </Highlight>
                        </MotionHeading>
                    </Center>

        </>
    )

}

export default Phrase

