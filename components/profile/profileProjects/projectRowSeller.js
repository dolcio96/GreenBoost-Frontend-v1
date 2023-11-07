// Chakra imports
import {
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
import {formatDate} from "@lib/parser"
// Custom components
import {compareDate} from "@lib/dateFunctions"
import { mapIcon } from "@lib/mapIcon";
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


function ProjectRowSeller({ project }) {
    const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: false });

    return (<>
        <Box  my="20px" p='5px' bg="primary"
            borderRadius={"10px"}
        >
            <Tooltip label={compareDate("31/12/2023")[1]}>
                <Circle
                    size="20px"
                    position="absolute"
                    bg={compareDate("31/12/2023")[0]}

                />
            </Tooltip>

            <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)", xl: "repeat(5, 1fr)" }} gap='22px' justifyContent={"center"}>
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
                            
                           { mapIcon(project.project_type.type_name, "36px", "#ffffff")}
                                {/*project.project_type.map((pt, index) => {
                                    return (pt.type_name)
                                })*/}

                            </Flex>
                        </ElementComponent>

                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Total CC" />
                        <ElementComponent><Text fontSize={20}>{project.carbon_credits.length} CC</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Remaining CC" />
                        <ElementComponent><Text fontSize={20}>{project.carbon_credits.length} CC</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Show Project" />
                        <ElementComponent><a href={'/projects/' + project.id}><ExternalLinkIcon boxSize={8} cursor={"pointer"} /></a></ElementComponent>
                    </Flex>
                </Box>
            </Grid>



            <Collapse mt={4} in={isOpen}>
                <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Start Validity Date" />
                            <ElementComponent><Text fontSize={20}>{formatDate(project.update_timestamp)}</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Expiration Date" />
                            <ElementComponent><Text fontSize={20}>{"31/12/2022"}</Text></ElementComponent>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Project Status" />
                            <ElementComponent><Text fontSize={20}>{"Valid"}</Text></ElementComponent>
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

export default ProjectRowSeller;
