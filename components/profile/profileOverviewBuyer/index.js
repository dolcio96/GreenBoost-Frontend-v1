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
import PieChart from "./pieChart"

// Custom components

import React from "react";
import KPINumber from "@lib/KPInumber"


const ProjectRow = ({ project }) => {
    const textColor = useColorModeValue("gray.700", "white");
    const iconColor = useColorModeValue("blue.500", "white");
    return (<>
        <Box my="20px" p='10px' bg="primary"
            borderRadius={"10px"}
        >
            <Grid templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", xl: "repeat(4, 1fr)" }} gap='30px' justifyContent={"space-between"}>
                <Box flex="1">
                    <Center flexDirection='column' align='center' my={2}>
                        <Heading fontSize='lg' mb={4}>Project Name </Heading>
                        <Text color={"tertiary"}>{project.name}</Text>
                    </Center>
                </Box>

                <Box flex="1">

                    <Center flexDirection='column' align='center' my={2}>
                        <Heading fontSize='lg' mb={4}>Project Type</Heading>
                        <Text color={"tertiary"}>{project.project_type.name}</Text>
                    </Center>
                </Box>

                <Box flex="1">
                    <Center flexDirection='column' align='center' my={2}>
                        <Heading fontSize='lg' mb={4}>Quantity</Heading>
                        <Text color={"tertiary"}>{project.NCCAquistati} CC</Text>
                    </Center>
                </Box>

                <Box flex="1">
                    <Center flexDirection='column' align='center' my={2}>
                        <Heading fontSize='lg' mb={4}>Emission Date</Heading>
                        <Text color={"tertiary"}>{"30/04/2022"}</Text>
                    </Center>
                </Box>
            </Grid>
        </Box>
    </>)
}

function getCCCountByProjectType(CC, project_type) {

    var count = 0;

    CC.forEach(credit => {
        const projectTypeCC = credit.project?.project_type?.name;
        if (projectTypeCC && projectTypeCC === project_type) {
            count = count + 1;
        }
    });

    return count;
}

function getProjectTypeArray(CC) {
    var projectTypeArray = [];
    CC.forEach(credit => {
        const projectType = credit.project?.project_type?.name;
        if (projectType && !projectTypeArray.includes(projectType)) {
            projectTypeArray.push(projectType);
        }
    });

    return projectTypeArray
}
function getUniqueAndLatestProjects(userInfo, n) {
    const projectMap = new Map();
    const projectTypeCountMap = new Map();

    // Populate the map with unique projects and count occurrences by project type
    userInfo.carbon_credits.forEach(carbonCredit => {
        const project = carbonCredit.project;
        if (project) {
            // Track unique projects
            if (!projectMap.has(project.id)) {
                projectMap.set(project.id, {
                    ...project,
                    count: 0 // Initialize the count
                });
            }

            // Increment count for project type
            const projectType = project.project_type?.name;
            if (projectType) {
                const currentCount = projectTypeCountMap.get(projectType) || 0;
                projectTypeCountMap.set(projectType, currentCount + 1);
            }
        }
    });

    // Get unique projects
    const uniqueProjects = Array.from(projectMap.values()).sort((a, b) => {
        return new Date(b.update_timestamp) - new Date(a.update_timestamp);
    });

     // Ottenere gli ultimi n progetti
     const latestProjects = uniqueProjects.slice(0, n);

    // Add counts to the latest projects
    latestProjects.forEach(project => {
        if (project) {
            const projectType = project.project_type?.name;
            if (projectType && projectTypeCountMap.has(projectType)) {
                project.NCCAquistati = projectTypeCountMap.get(projectType);
            }
        }
    });

    return latestProjects;
}

function getChartOptions(userInfo) {
    const projectTypes = getProjectTypeArray(userInfo.carbon_credits);
    const counts = projectTypes.map(type => getCCCountByProjectType(userInfo.carbon_credits, type));

    return {

        labels: projectTypes,
        series: counts

    };
}

function ProfileOverviewBuyer({ userInfo }) {

    return (
        <>
            <Center minH="80vh" >
                <Stack m={"5px"} direction={{ base: 'column', md: 'row' }} w="100%" justifyContent={{ base: 'center', md: "space-between" }}  >
                    <Center w={{ base: '100%', md: '50%' }}>
                        <Box>
                            <KPINumber key={"Total Active VCC"} n={userInfo.carbon_credits.length} dly={200} lbl={"Total Active VCC"} fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} />
                            <Center mt="20px">
                                <Box>
                                    <Heading fontSize="xl" mb="4">Portafoglio progetti</Heading>
                                    <PieChart chartOpts={getChartOptions(userInfo)} />
                                </Box>
                            </Center>

                            {/*getProjectTypeArray(userInfo.carbon_credits).map(projectType => {

                                return <KPINumber key={projectType} n={getCCCountByProjectType(userInfo.carbon_credits, projectType)} dly={1200} lbl={projectType} fontSize={{ base: "xl", md: "2xl", lg: "3xl" }} />

                            })*/}
                        </Box>
                    </Center>
                    <Center w={{ base: '100%', md: '50%' }}>
                        <Flex direction='column'  >
                            <Heading>
                                Ultimi acquisti
                            </Heading>
                            {getUniqueAndLatestProjects(userInfo, 4).map(project => { return <ProjectRow key={project.id} project={project} /> })}

                        </Flex>
                    </Center>

                </Stack>
            </Center>

        </>
    );
}

export default ProfileOverviewBuyer;
