// Chakra imports
import {
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    Heading,
    GridItem,
    VStack,
    useDisclosure,
    Icon,
    Link,
} from "@chakra-ui/react";
import React from 'react';

import Card from "@components/card/Card"
import CardBody from "@components/card/CardBody"
import CardHeader from "@components/card/CardHeader"
import { useSpring, animated } from "react-spring";

import logoPuro from "@public/Images/logoPuro.png"
import forest from "@public/Images/forest.jpg"

import { useAnimation, motion } from "framer-motion"

const color1 = "#70D6FF"
const color1s = "#0A739D"
const color2 = "#B8A3D3"
const color2s = "#8051BD"
const color3 = "#FF70A6"
const color3s = "#D61961"
const color4 = "#FF9770"
const color4s = "#E25826"
const color5 = "#FFD670"
const color5s = "#DFA410"
const color6 = "#E9FF70"
const color6s = "#C2DF20"


const texts = {
    uno: { title: "Forest", description: "The package designed to combat climate change by acting on forests", bg_color: color1, color: color1s },
    due: { title: "Biodiversity", description: "Supports projects focused on species preservation and animal and plant protection.", bg_color: color2, color: color2s },
    tre: { title: "SDG mix", description: "Ensures coverage of the Sustainable Development Goals: environmental, social and economic sustainability.", bg_color: color3, color: color3s },
    quattro: { title: "Technology", description: "Values the use of technology to generate environmental benefits and combat climate change.", bg_color: color4, color: color4s },
    cinque: { title: "Blue carbon", description: "The package dedicated to projects that protect and develop coastal ecosystems.", bg_color: color5, color: color5s },
    sei: { title: "Social impact", description: "The package that supports projects by prioritizing concrete benefits for local communities.", bg_color: color6, color: color6s }
}

const TypeCard = ({ info }) => {
    return (
        <Box >
            <Box bg={info.bg_color} borderRadius={36} h={"60vh"} position="relative" border="3px solid" >
                <Box p={5}>
                    <Center >
                        <Heading fontSize={48} color={info.color} > {info.title}</Heading>
                    </Center>
                </Box>
                <Flex direction="column" justifyContent={"space-around"} h={"full"} position="relative">
                    <Box p={3}>
                        <Center textAlign={"center"} justifyContent={"center"}>
                            <Text fontSize={20}>{info.description}</Text>
                        </Center>
                        <Center>
                        </Center>
                    </Box>

                    <Image src={forest.src} borderRadius={36} />
                    <Button
                        color={info.color}
                        borderRadius={50}
                        bg={info.bg_color}
                        position="absolute"
                        top="70%"
                        left="50%"
                        transform="translate(-50%, -50%)">
                        <Link href={'/create/' + info.title.trim().toLowerCase()} >
                            More Info</Link>
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}



const Create = () => {

    const MotionTypeCard = motion(TypeCard)

    return (
        <>
            <Box mb={10}>
                <Center>
                    <Heading>
                        Powered By
                    </Heading>
                </Center>
                <Center my={2} mx={10}>
                    <Image src={logoPuro.src} />
                </Center>
                <Center>
                    <Text>
                        Coming Soon
                    </Text>
                </Center>
                <Center p={2}>
                    <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }}
                        gap={10}  >
                        <GridItem p={10} borderStyle="3px "> <MotionTypeCard info={texts.uno} /></GridItem>
                        <GridItem p={10} borderStyle="3px "><MotionTypeCard info={texts.due} /></GridItem>
                        <GridItem p={10} borderStyle="3px "><MotionTypeCard info={texts.tre} /></GridItem>
                        <GridItem p={10} borderStyle="3px "><MotionTypeCard info={texts.quattro} /></GridItem>
                        <GridItem p={10} borderStyle="3px "><MotionTypeCard info={texts.cinque} /></GridItem>
                        <GridItem p={10} borderStyle="3px "><MotionTypeCard info={texts.sei} /></GridItem>
                    </Grid>

                </Center>
            </Box>
        </>
    );
}

export default Create