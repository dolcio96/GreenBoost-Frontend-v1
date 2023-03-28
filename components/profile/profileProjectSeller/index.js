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
    GridItem,
    VStack,
    useDisclosure,
    Spinner,
} from "@chakra-ui/react";

import { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon } from "@lib/icons";
import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ProjectRowSellerComponent from "@components/projects/projectRowSeller"
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Icons = [<EolicIcon key={1} size={36} />, <TrashIcon key={2} size={36} />, <BambooIcon key={3} size={36} />,
<NuclearIcon key={4} size={36} />, <ForestIcon key={5} size={36} />, <LeafIcon key={6} size={36} />, <ChemicalIcon key={7} size={36} />]

function setChartOptions(projects) {

    var chartOpts = {

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

    return chartOpts;
}


function ProfileProjectsSeller({ userInfo }) {
    var { data: session, status } = useSession()
   // console.log("INFO")
   // console.log(userInfo)
   // console.log(status)
 
    const chartOptions = setChartOptions(userInfo.projects)

    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Seller</Heading>
                </Center>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                    <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent={"center"}>
                        {
                            userInfo.projects.map((project, index) => {
                                project["tablesData"] = {
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
                                return (
                                    <ProjectRowSellerComponent
                                        key={index}
                                        project={project} />

                                )
                            })}
                    </GridItem>
                    <GridItem colSpan={{ base: 3, lg: 1 }} justifyContent={"center"}>
                        <Center>
                            <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
                        </Center>
                    </GridItem>

                </Grid>
            </Box>
        </>
    );
}

export default ProfileProjectsSeller;
