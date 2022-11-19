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
    Stack,
    VStack,
} from "@chakra-ui/react";
// public
import avatar2 from "@public/Images/avatars/avatar2.png";
import avatar3 from "@public/Images/avatars/avatar3.png";
import avatar4 from "@public/Images/avatars/avatar4.png";

import avatar6 from "@public/Images/avatars/avatar6.png";

// Custom components

import React from "react";
import {
    FaPlus,
} from "react-icons/fa";

import KPINumber from "@lib/KPInumber"




import { useSpring, animated } from "react-spring";

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

        <>
            
            <Flex direction='row' w="100%">
                <Flex direction='column' w="50%">
                    <Center>
                        <Text> TOTAL ACTIVE VCC : <KPINumber n={60} dly={200} /></Text>
                    </Center>
                </Flex>
                <Flex direction='column' w="50%">

                    <Box>
                        <Center>
                            <Text>  FORESTRY VCC :<KPINumber n={30} dly={400} /></Text>
                        </Center>
                    </Box>
                    <Box>
                        <Center>
                            <Text>  OTHER VCC : <KPINumber n={30} dly={400} /></Text>
                        </Center>
                    </Box>

                </Flex>
            </Flex>
             
            <Flex direction='column'>
                <Box p='16px' px="50px" my={{ sm: "24px", xl: "0px" }}>
                    <Box p='12px 5px' mb='12px'>
                        <Flex direction="row" justifyContent={"space-between"}>
                            <Heading>
                                Bought Projects
                            </Heading>
                            <Heading>
                                Total VCC: 60
                            </Heading>
                        </Flex>
                    </Box>
                    <ProjectRow />
                    <ProjectRow />
                </Box>


            </Flex>
        </>
    );
}

export default ProfileOverview;
