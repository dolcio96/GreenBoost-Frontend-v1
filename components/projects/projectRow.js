// Chakra imports
import {
    Avatar,
    Box,
    Flex,
    Center,
    Grid,
    Text,
    Heading,
} from "@chakra-ui/react";


// public
import avatar2 from "@public/Images/avatars/avatar2.png";
import avatar3 from "@public/Images/avatars/avatar3.png";
import avatar4 from "@public/Images/avatars/avatar4.png";

import avatar6 from "@public/Images/avatars/avatar6.png";

// Custom components

import React from "react";


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




function ProjectRow({ projectName, projectTypes, location, quantity, date, expirationDate }) {


    console.log(projectTypes[0])
    return (<>
        <Box my="20px" p='5px' bg="primary"
            borderRadius={"10px"}
        >
            <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap='22px' justifyContent={"center"}>


                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Project Name" />
                        <ElementComponent><Text>{projectName}</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Project Type" />
                        <ElementComponent>
                            <Flex gap={3} >

                                {projectTypes.map((pt, index) => {
                                    return ( pt )
                                })}

                            </Flex>
                        </ElementComponent>

                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Location" />
                        <ElementComponent><Text>{location}</Text></ElementComponent>
                    </Flex>
                </Box>
                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Quantity" />
                        <ElementComponent><Text>{quantity} CC</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Date" />
                        <ElementComponent><Text>{date}</Text></ElementComponent>
                    </Flex>
                </Box>

                <Box>
                    <Flex direction='column' align='center'>
                        <TitleComponent title="Expiration Date" />
                        <ElementComponent><Text>{expirationDate}</Text></ElementComponent>
                    </Flex>
                </Box>


            </Grid>


        </Box>
    </>)
}

export default ProjectRow;
