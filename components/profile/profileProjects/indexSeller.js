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

import { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon } from "@lib/icons";
import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ProjectRowSellerComponent from "@components/profile/profileProjects/projectRowSeller"
import dynamic from 'next/dynamic';
import Co2Icon from '@mui/icons-material/Co2';
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import SpinnerCustom from "@lib/spinnerCustom";



function BTNCertify() {
    return <>
        <Button
            w={"90%"}
            color={"black"}
            as={"a"}
            href={"/createproject"}
            p='0px'
            bg='transparent'
            border='1px solid lightgray'
            borderRadius='15px'
            minHeight={{ sm: "200px", md: "200px" }}
            _hover={{
                bg: "primary",
                textColor: "tertiary"
            }}>
            <Flex direction='column' justifyContent='center' align='center'>
                <Co2Icon fontSize="large" />
                <Text fontSize='lg' fontWeight='bold'>
                    Other projects? Certify Them through us!
                </Text>
            </Flex>
        </Button>
    </>
}


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
        }


    };

    return chartOpts;
}

function addTablesData(project) {
    project["tablesData"] = {
        type: "Buyers",
        header:
            [
                "Buyer",
                "Quantity",
                "value",
                "Date",
                "Blockchain Tx"
            ],
        list: {
            buyer1: ["Company1", "10 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
            buyer2: ["Company2", "20 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
            buyer3: ["Company3", "50 CC", "40 $", "25/12/2023", "https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"],
        }
    }
    return project
}

function ProfileProjectsSeller({ userInfo }) {
    var { data: session, status } = useSession()


    const chartOptions = setChartOptions(userInfo.projects)

    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Seller</Heading>
                </Center>
                {status == "loading" ?
                    <Center><SpinnerCustom /></Center> :
                    <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                        <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent={"center"}>
                            {
                                userInfo.projects.map((project, index) => {
                                    return (
                                        <ProjectRowSellerComponent
                                            key={index}
                                            project={addTablesData(project)} />

                                    )
                                })}
                        </GridItem>
                        <GridItem colSpan={{ base: 3, lg: 1 }} justifyContent={"center"}>
                            <Center>
                                <Flex direction={"column"}>
                                <Center><Heading>Sold CC</Heading></Center> 
                                    <Center>
                                      
                                        <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
                                    </Center>
                                    <Center>
                                        <BTNCertify />
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

export default ProfileProjectsSeller;
