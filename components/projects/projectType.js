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
    UnorderedList, ListItem
} from "@chakra-ui/react";
import React from 'react';

import logoPuro from "@public/Images/logoPuro.png"
import forest from "@public/Images/forest.jpg"

import { useAnimation, motion } from "framer-motion"

import NextImage from 'next/image';
import LogoGB from '@public/logoGB.png'
import BackgroudImage from "@public/Images/torbiere1.jpg"



import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PublicIcon from '@mui/icons-material/Public';




const ListItems = ({ Icon, list }) => {
    const MotionBox = motion(Box)
    const renderList = (item) => {
        if (typeof item === 'string') {
            return <Text> {item}</Text>;
        } else if (typeof item === 'object') {
            // Se l'elemento è un oggetto, crea una lista
            return (
                <UnorderedList>
                    {Object.keys(item).map((key) => (
                        <ListItem key={key}>
                            {item[key]}
                        </ListItem>
                    ))}
                </UnorderedList>
            );
        }
        return null;
    };

    return (<>
        <MotionBox initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}>
            <Flex gap={20}><Icon style={{ color: "#588157", fontSize: "60px" }} />
                <Center>{renderList(list)}</Center>
            </Flex>
        </MotionBox>
    </>)
}

const ProjectType = ({ projectDetails }) => {


    const MotionBox = motion(Box)
    const imagePath = `Images/${projectDetails.title.trim()}.jpg`;
    const projectImage = require(`../../public/${imagePath}`).default;
    return (
        <>
            <Box m={10}>
                <Box my={10}>
                    <Center>
                        <Image src={LogoGB.src} textShadow='2px 2px #588157' w={"50%"} />
                    </Center>
                    <Center>
                        <Heading fontSize={"50px"} color={"primary"}>
                            {projectDetails.title}
                        </Heading>
                    </Center>
                </Box>
                <Center mx={20} flexDirection={"column"}>
                    <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={40} >
                        <GridItem w="full" h="full"><MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                            <NextImage style={{ borderRadius: "60px" }} w="full" h="full" borderRadius={"10px"} src={projectImage} />
                        </MotionBox></GridItem>
                        <GridItem w="full" h="full">
                            <Center h="full" flexDirection="column">
                                <MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <Heading>{projectDetails.title1}</Heading>
                                    <Text textAlign={"justify"}>{projectDetails.description1}</Text>
                                </MotionBox>
                            </Center>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns={{ base: '1fr', xl: 'repeat(2, 1fr)' }} gap={20} my={20} py={10} borderRadius={"10px"}>
                        <GridItem w="full" h="full"><ListItems Icon={TaskAltIcon} list={projectDetails.list1} /></GridItem>
                        <GridItem w="full" h="full"><ListItems Icon={AccessTimeIcon} list={projectDetails.list2} /></GridItem>
                        <GridItem w="full" h="full"><ListItems Icon={AddCircleOutlineIcon} list={projectDetails.list3} /></GridItem>
                        <GridItem w="full" h="full"><ListItems Icon={PublicIcon} list={projectDetails.list4} /></GridItem>
                    </Grid>
                    <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={40} >
                        <GridItem w="full">
                            <Center h="full" flexDirection="column">
                                <MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                                    <Heading>{projectDetails.title2}</Heading>
                                    <Text textAlign={"justify"}>{projectDetails.description2}</Text>
                                </MotionBox>
                            </Center>
                        </GridItem>
                        <GridItem w="full"><MotionBox initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                            <NextImage style={{ borderRadius: "60px" }} w="full" h="full" borderRadius={"10px"} src={projectImage} />
                        </MotionBox></GridItem>
                    </Grid>
                </Center>

            </Box>
        </>
    );
}

export default ProjectType