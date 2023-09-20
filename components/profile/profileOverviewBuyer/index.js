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
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });



const chartOptions = {

    series: [44, 55, 13],
    options: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Forestry', 'Heolic', 'Other'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },


};


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



function ProfileOverviewBuyer({userInfo}) {


    return (
        <>
            <Center h="80vh" >
                <Stack direction={{ base: 'column', md: 'row' }} w="100%" justifyContent={{ base: 'center', md: "space-between" }}  >
                    <Center w={{ base: '100%', md: '50%' }}>
                        <Box>
                            <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
                        </Box>
                    </Center>
                    <Center w={{ base: '100%', md: '50%' }}>
                        <Flex direction='column'  >

                            <KPINumber n={60} dly={200} lbl={"Total Active VCC"} fontSize={"5xl"} />
                            <KPINumber n={30} dly={1200} lbl={"Forestry VCC"} fontSize={"3xl"} />
                            <KPINumber n={30} dly={1200} lbl={"Other VCC"} fontSize={"3xl"} />


                        </Flex>
                    </Center>

                </Stack>
            </Center>
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
                    {/* <ProjectRow />
                    <ProjectRow /> */}
                </Box>


            </Flex>
        </>
    );
}

export default ProfileOverviewBuyer;
