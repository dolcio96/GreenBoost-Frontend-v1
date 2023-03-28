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
    Icon,
} from "@chakra-ui/react";

import {
    FaPlus,
} from "react-icons/fa";

import Co2Icon from '@mui/icons-material/Co2';

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

    const chartOptions = setChartOptions()

    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Seller</Heading>
                </Center>
                <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                    <GridItem colSpan={{ base: 3, lg: 2 }} justifyContent={"center"}>
                        <p>riga</p>
                        <p>riga</p>
                        <p>riga</p>
                    </GridItem>
                    <GridItem colSpan={{ base: 3, lg: 1 }} justifyContent={"center"}>
                        <Center>
                            <Flex direction={"column"}>
                                <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
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
                                        <Co2Icon fontSize="large"/>
                                        <Text fontSize='lg' fontWeight='bold'>
                                           Other projects? Certify Them through us!
                                        </Text>
                                    </Flex>
                                </Button>
                            </Flex>
                        </Center>
                    </GridItem>

                </Grid>
            </Box>
        </>
    );
}

export default ProfileProjectsSeller;
