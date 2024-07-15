import React, { useState, useEffect } from 'react';
// Chakra imports
import {

    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Link,
    Heading,
    Spacer,
    Text,
    Stack,
    Center,
    FormControl,
    VStack,
    GridItem,
} from "@chakra-ui/react";

import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";

import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'
import { useSession } from "next-auth/react"
const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextDesc = ({ children }) => {
    return <Text w={{ md: "50%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};

const TextValue = ({ children }) => {
    return <Text color="gray.400" mt={"9px"} mb='18px' >{children}</Text>;
};

function UserInfo({user}) {
    const methods = useForm();
    
    //var { data: session, status } = useSession()

    return (
        <>
            <Flex direction='column'  >
                    <Card p='16px' my={{ sm: "24px", md: "0px" }}>
                        <CardHeader>
                            <Box p='12px 5px' mb='12px'>
                            <Text fontSize='25px' fontWeight='bold'>
                                    Profile Informations
                                </Text>
                            </Box>
                        </CardHeader>
                        <CardBody px='5px'>
                            <Grid templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }} gap='10px'>
                                <FlexContainerIB>
                                    <TextDesc>Company Name:</TextDesc>
                                    <TextValue>{user.company.company_name}</TextValue>
                                    {/* <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Company Name' readonly="true" _focus={{ border: "none" }} border="none" />*/}
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>Email Address:</TextDesc>
                                    <TextValue>{user.company.customer.email}</TextValue>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>Street Address:</TextDesc>
                                    <TextValue>{user.company.customer.customer_address}</TextValue>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>City:</TextDesc>
                                    <TextValue>{user.company.customer.city.city_name}</TextValue>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>Country:</TextDesc>
                                    <TextValue>{user.company.customer.city.country.name}</TextValue>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>TAX Number:</TextDesc>
                                    <TextValue>{user.company.tax_number}</TextValue>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextDesc>Identity Status:</TextDesc>
                                    <TextValue>Verified</TextValue>
                                </FlexContainerIB>
                            </Grid>
                        </CardBody>
                    </Card>
            </Flex>
        </>
    );
}

export default UserInfo;
