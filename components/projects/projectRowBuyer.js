// Chakra imports
import {
    Avatar,
    Box,
    Flex,
    Center,
    Grid,
    Text,
    Heading,
    useDisclosure,
    Button,
    Collapse,
    Circle,
    Tooltip,
} from "@chakra-ui/react";

import React, { useState } from "react";


// Custom components

import { ChevronDownIcon, ChevronUpIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const TitleComponent = ({ title }) => {
    return (<>
        <Heading my="10px" fontSize='lg'>{title}</Heading>
    </>)
}

const ElementComponent = ({ children }) => {
    return (<>

        <Center h='50px' color='white'>
            {children}
        </Center>

    </>)
}

const openTransactionInfo = () => {
    if (typeof window !== undefined) {
        // browser code
        window?.open("https://www.google.com", 'noopener,noreferrer');
    }
    console.log("click")
}




function ProjectRow({projectId, projectName, projectTypes, location, quantity, date, expirationDate, txLink }) {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

    const circleColor = () => {
        const elements = expirationDate.split("/")
        const deadlineDate = new Date(parseInt(elements[2], 10), parseInt(elements[1], 10) - 1, parseInt(elements[0], 10),)
        const today = new Date();
        if (deadlineDate < today) return ["red.300", "Expired CC"]
        else return ["green.300", "Valid CC"]
        return deadlineDate
    }
  
    return (<>
        <Box  my="20px" p='5px' bg="primary"
            borderRadius={"10px"}
        >
            <Tooltip label={circleColor()[1]}>
                <Circle
                    size="20px"
                    position="absolute"
                    bg={circleColor()[0]}

                />
            </Tooltip>

            <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }} gap='22px' justifyContent={"center"}>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Project Name" />
                        <ElementComponent><Text fontSize={20}>{projectName}</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Project Type" />
                        <ElementComponent>
                            <Flex gap={3} >

                                {projectTypes.map((pt, index) => {
                                    return (pt)
                                })}

                            </Flex>
                        </ElementComponent>

                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Quantity" />
                        <ElementComponent><Text fontSize={20}>{quantity} CC</Text></ElementComponent>
                    </Flex>
                </Box>


                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Transaction" />
                        <ElementComponent><a href={txLink} rel="noreferrer" target="_blank"><ExternalLinkIcon boxSize={8} cursor={"pointer"} /></a></ElementComponent>
                    </Flex>
                </Box>


            </Grid>



            <Collapse mt={4} in={isOpen}>
                <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)", xl: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>


                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Location" />
                            <ElementComponent><Text fontSize={20}>{location}</Text></ElementComponent>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Date" />
                            <ElementComponent><Text fontSize={20}>{date}</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Expiration Date" />
                            <ElementComponent><Text fontSize={20}>{expirationDate}</Text></ElementComponent>
                        </Flex>
                    </Box>


                </Grid>
            </Collapse>
            <Center>
                {isOpen ? <ChevronUpIcon onClick={onToggle} boxSize={6} color={"white"} cursor={"pointer"} /> :
                    <ChevronDownIcon onClick={onToggle} boxSize={6} color={"white"} cursor={"pointer"} />}
            </Center>


        </Box>
    </>)
}

export default ProjectRow;
