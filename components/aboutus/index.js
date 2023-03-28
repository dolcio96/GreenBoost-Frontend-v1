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

function setChartOptions() {

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

const projects2 = [
    {
        projectName: "Progetto 1",
        project_type: [Icons[1], Icons[3], Icons[4]],
        location: "U.S.A",
        carbon_credits: "5",
        date: "10/11/2022",
        expirationDate: "31/12/2022",
        txLink: ""
    },
    {
        projectName: "Progetto 2",
        project_type: [Icons[0], Icons[2], Icons[3]],
        location: "France",
        carbon_credits: "5",
        date: "09/10/2022",
        expirationDate: "31/12/2021",
        txLink: ""
    },
]

function AboutUs() {
    const chartOptions = setChartOptions()
    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Seller</Heading>
                </Center>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                    <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent={"center"}>
                        {
                            projects2.map((project, index) => {
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

export default AboutUs;