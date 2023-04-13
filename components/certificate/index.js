// Chakra imports
import {
    Box,
    Flex,
    Center,
    Text,
    Heading,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import React from 'react';
import LogoGB from '@public/logoGB.png'

const Certificate = ({ certificationDetails }) => {
    return (

        <>
            {/*
            <Box minH={"80vh"} border={"4px"} m="30px" borderRadius={"10px"} backgroundColor={"tertiary"} borderColor={"primary"}>
                <Flex direction={"column"} m="30px">
                    <Center>
                        <Heading>
                            CERTIFICATION N. {certificationDetails.certificationId}
                        </Heading>
                    </Center>
                    <Center>
                        <Text>
                            Coming Soon
                        </Text>
                    </Center>
                    <Box>
                        <Text>
                            Certified By
                        </Text>
                        <Image w={"30%"} src={LogoGB.src} />
                    </Box>
                </Flex>
            </Box>
 */}
            <Center>
                <Box minH={"80vh"} border={"4px"} my="50px" w="80%" borderRadius={"10px"} backgroundColor={"tertiary"} borderColor={"primary"}>
                    <Grid templateRows={{ base: "1fr", lg: "repeat(6, 1fr)" }} gap='22px' textAlign="center" m="30px">
                        <GridItem rowSpan={{ base: 3, lg: 1 }} >
                            <Heading>
                                CERTIFICATION N. {certificationDetails.certificationId}
                            </Heading>
                        </GridItem>
                        <GridItem rowSpan={{ base: 3, lg: 4 }} >

                            <Text fontSize='2xl' >
                                Buyer Name: {certificationDetails.buyer}
                            </Text>
                            <Text fontSize='2xl'>
                                Project Name: {certificationDetails.projectName}
                            </Text>
                            <Text fontSize='2xl'>
                                Purchase Date: {certificationDetails.date}
                            </Text>
                            <Text fontSize='2xl'>
                                Quantity: {certificationDetails.quantity} CC
                            </Text >
                            <Text fontSize='2xl'>
                                Expiration Date: {certificationDetails.expirationDate}
                            </Text>
                            <Text fontSize='2xl'> 
                                Blockchain Name: {certificationDetails.blockchainName}
                            </Text>
                            <Text fontSize='2xl'>
                                Transaction ID: {certificationDetails.txID}
                            </Text>

                        </GridItem>
                        <GridItem rowSpan={{ base: 3, lg: 1 }} >
                            <Center>
                                <Image w="30%" src={LogoGB.src} />
                            </Center>
                        </GridItem>
                    </Grid>
                </Box>
            </Center>
        </>
    );
}

export default Certificate