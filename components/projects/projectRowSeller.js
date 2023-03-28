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
import BuyersTableComponent from "@components/table"

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

const tablesData = {
    type: "Buyers",
    header:
      [
        "Project Name",
        "Buyer",
        "Quantity",
        "value",
        "Date",
        "Blockchain Tx"
      ],
    list: {
      buyer1: ["Project1", "Company1", "10 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
      buyer2: ["Project2", "Company2", "20 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
      buyer3: ["Project1", "Company3", "50 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
    }
  }



function ProjectRow({ project }) {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

    const circleColor = () => {
        const expirationDate = "31/12/2022"
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
                        <ElementComponent><Text fontSize={20}>{project.id}</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Project Type" />
                        <ElementComponent>
                            <Flex gap={3} >
                            {project.project_type.type_name}
                                {/*project.project_type.map((pt, index) => {
                                    return (pt.type_name)
                                })*/}

                            </Flex>
                        </ElementComponent>

                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Quantity" />
                        <ElementComponent><Text fontSize={20}>{project.carbon_credits.length} CC</Text></ElementComponent>
                    </Flex>
                </Box>


                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="More Info" />
                        <ElementComponent><a href={'/projects/' + project.id}><ExternalLinkIcon boxSize={8} cursor={"pointer"} /></a></ElementComponent>
                    </Flex>
                </Box>
            </Grid>



            <Collapse mt={4} in={isOpen}>
                <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Date" />
                            <ElementComponent><Text fontSize={20}>{project.update_timestamp }</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Expiration Date" />
                            <ElementComponent><Text fontSize={20}>{"31/12/2022"}</Text></ElementComponent>
                        </Flex>
                    </Box>


                </Grid>

                <BuyersTableComponent tablesData={project.tablesData}/>
            </Collapse>
            <Center>
                {isOpen ? <ChevronUpIcon onClick={onToggle} boxSize={6} color={"white"} cursor={"pointer"} /> :
                    <ChevronDownIcon onClick={onToggle} boxSize={6} color={"white"} cursor={"pointer"} />}
            </Center>


        </Box>
    </>)
}

export default ProjectRow;
