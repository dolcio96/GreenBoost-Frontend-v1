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
import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";
import { VscFilePdf } from "react-icons/vsc";
import { truncateStringLength } from "@lib/truncateStringLength"
//import DropzoneField from "@components/createproject/dropzonefield"
import UserInfo from '@components/profile/profileInfo/userInfo';
import Documentations from "@components/profile/userDocumentation/documentations"

const pdfList = [{ name: "Nome1", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }, { name: "Nome2", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }]

const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextDesc = ({ children }) => {
    return <Text w={{ md: "50%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};

const TextValue = ({ children }) => {
    return <Text color="gray.400" mt={"9px"} mb='18px' >{children}</Text>;
};

const handleDownload = async (PDF_URL, PDF_Name) => {
    const pdfUrl = PDF_URL;
    const pdfName = PDF_Name;
    try {
        //Fetch in the backend
        const response = await fetch("/api/download_pdf/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pdfUrl }),
        });
        if (response.ok) {
            const pdfBlob = await response.blob();

            // Crea un URL oggetto temporaneo per il file PDF
            const url = window.URL.createObjectURL(pdfBlob);

            // Crea un link "nascosto" per il download del PDF
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = pdfName;
            document.body.appendChild(a);
            a.click();

            // Rilascia l'URL oggetto temporaneo
            window.URL.revokeObjectURL(url);
        }
    } catch (error) {
        console.error("Si è verificato un errore durante il download del PDF:", error);
    }
};


const PDFComponent = ({ name, url }) => {
    return <GridItem colSpan={1} key={name}>
        <Box height="100px">
            <Button w={"100%"} h={"100%"} p={3} color="primary" sx={{ _hover: { backgroundColor: "primary", color: "tertiary" } }} onClick={() => handleDownload(url, name)}>
                <VStack >
                    <VscFilePdf size={30} />
                    <Text noOfLines={2} >{truncateStringLength(name, 5)}</Text>
                </VStack>
            </Button>
        </Box>
    </GridItem>
}




function ProfileInfoSeller() {
    const [files, setFiles] = useState([]);
    console.log(files);
    const methods = useForm();

    const thumbs = files?.map(file => (
        <Box key={file.name} mb="15px">
            <Flex direction={"row"} color="primary">
                <VscFilePdf style={{ marginRight: "20px" }} size="30px" />
                <Text>{file.name}</Text>
            </Flex>
        </Box>
    ));

    async function onSubmit() {
        return console.log(files);
    }
    var { data: session, status } = useSession()

    console.log(status)
    console.log(session)
    return (
        <>
        <Box>
        </Box>
            <Flex direction='column'  >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>
                <UserInfo/>
                <Documentations pdfList={pdfList}/>
                </Grid>

            </Flex>


        </>
    );
}

export default ProfileInfoSeller;
