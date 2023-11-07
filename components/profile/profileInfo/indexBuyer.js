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
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'
import { useSession } from "next-auth/react"
import { VscFilePdf } from "react-icons/vsc";
import UserInfo from '@components/profile//profileInfo/userInfo';
import Documentations from "@components/profile//profileInfo/documentations"

const pdfList = [{ name: "Nome1", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }, { name: "Nome2", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }]




function ProfileInfoBuyer() {
    const [files, setFiles] = useState([]);
    console.log(files);
    const methods = useForm();

    var { data: session, status } = useSession()

    console.log(status)
    console.log(session)
    return (
        <>
            <Flex direction='column'  >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
                    <UserInfo />
                    <Documentations pdfList={pdfList} />
                </Grid>

            </Flex>
        </>
    );
}

export default ProfileInfoBuyer;
