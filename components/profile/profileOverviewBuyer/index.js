// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
    Heading,
} from "@chakra-ui/react";
// public
import avatar2 from "@public/Images/avatars/avatar2.png";
import avatar3 from "@public/Images/avatars/avatar3.png";
import avatar4 from "@public/Images/avatars/avatar4.png";
import avatar5 from "@public/Images/avatars/avatar5.png";
import avatar6 from "@public/Images/avatars/avatar6.png";
import ImageArchitect1 from "@public/Images/bamboo.jpg";
import ImageArchitect2 from "@public/Images/foresta.jpg";
import ImageArchitect3 from "@public/Images/foresta.jpg";
// Custom components
import Card from "@components/card/card";
import CardBody from "@components/card/cardBody";
import CardHeader from "@components/card/cardHeader";
import React from "react";
import {
    FaPlus,
} from "react-icons/fa";

import ProjectCard from "@components/projects/projectCard"


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


const ProjectRow = () => {
    const textColor = useColorModeValue("gray.700", "white");
    const iconColor = useColorModeValue("blue.500", "white");
    return (<>
        <Box my="20px" p='5px' bg="primary"
            borderRadius={"10px"}
        >
            <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap='22px' justifyContent={"center"}>


                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Project Name" />
                            <ElementComponent><Text>Element3</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Project Type" />
                            <ElementComponent>
                                <Flex gap={3} >
                                    <Avatar name='Ryan Florence' src={avatar6} size={"sm"} />
                                    <Avatar name='Segun Adebayo' src={avatar2} size={"sm"} />
                                    <Avatar name='Kent Dodds' src={avatar3} size={"sm"} />
                                    <Avatar name='Prosper Otemuyiwa' src={avatar4} size={"sm"} />
                                </Flex>
                            </ElementComponent>

                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Location" />
                            <ElementComponent><Text>Location</Text></ElementComponent>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Quantity" />
                            <ElementComponent><Text>30 CC</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Date" />
                            <ElementComponent><Text>30/04/2022</Text></ElementComponent>
                        </Flex>
                    </Box>

                    <Box>
                        <Flex direction='column' align='center'>
                            <TitleComponent title="Expiration Date" />
                            <ElementComponent><Text>31/12/2022</Text></ElementComponent>
                        </Flex>
                    </Box>


            </Grid>


        </Box>
    </>)
}

function ProfileOverview() {
    const { colorMode } = useColorMode();

    // Chakra color mode
    const textColor = useColorModeValue("gray.700", "white");
    const iconColor = useColorModeValue("blue.500", "white");

    return (
        <Flex direction='column'>
            <Box p='16px' px="50px" my={{ sm: "24px", xl: "0px" }}>
                <Box p='12px 5px' mb='12px'>
                    <Heading>
                        Bought Projects
                    </Heading>
                </Box>
                <ProjectRow />
                <ProjectRow />
            </Box>


        </Flex>
    );
}

export default ProfileOverview;
