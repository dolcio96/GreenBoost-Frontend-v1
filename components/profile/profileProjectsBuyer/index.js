// Chakra imports
import {
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Text,
    Heading,
    GridItem,
    Spinner,
} from "@chakra-ui/react";

import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ProjectRowBuyerComponent from "@components/projects/projectRowBuyer"
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

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

function addTablesData(project) {
    project["tablesData"] = {
        type: "Sellers",
        header:
            [
                "Date",
                "Quantity",
                "value",
                "Blockchain Tx"
            ],
        list: {
            seller1: [ "25/12/2023", "10 CC", "40 $", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
            seller2: ["25/12/2023", "20 CC", "40 $",  "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
            seller3: ["25/12/2023", "20 CC", "40 $", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
        }
    }
    return project
}

function ProfileProjectsBuyer({ userInfo }) {
    var { data: session, status } = useSession()


    const chartOptions = setChartOptions(userInfo.projects)

    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Buyer</Heading>
                </Center>
                {status == "loading" ?
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor="#b7e4c7"
                        color="#0B0E3F"
                        size='xl' /> :
                    <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                        <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent={"center"}>
                            {
                                userInfo.projects.map((project, index) => {
                                    return (
                                        <ProjectRowBuyerComponent
                                            key={index}
                                            project={addTablesData(project)} />

                                    )
                                })}
                        </GridItem>
                        <GridItem colSpan={{ base: 3, lg: 1 }} justifyContent={"center"}>
                            <Center>
                                <Flex direction={"column"}>
                                    <Center>
                                        <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
                                    </Center>
                                </Flex>
                            </Center>
                        </GridItem>

                    </Grid>
                }

            </Box>
        </>
    );
}

export default ProfileProjectsBuyer;
