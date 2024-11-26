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
import { truncateStringLength } from "@lib/truncateStringLength"


const handleDownload = async (PDF_URL, PDF_Name) => {
    const pdfUrl = PDF_URL;
    const pdfName = PDF_Name;
    try {
        // Fetch in the backend
        const response = await fetch("/api/download_pdf/download", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pdfUrl }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const pdfBlob = await response.blob();

        // Check if the response is actually a PDF
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/pdf")) {
            throw new Error("The fetched file is not a PDF");
        }

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
        document.body.removeChild(a);
    } catch (error) {
        console.error("Si è verificato un errore durante il download del PDF:", error);
        alert("Si è verificato un errore durante il download del PDF. Per favore, riprova.");
    }
};


const PDFComponent = ({ name, url }) => {
    return <GridItem colSpan={1} key={name}>
        <Box height="100px">
            <Button w={"100%"} h={"100%"} p={3} 
            color="primary" borderColor={"primary"} 
            border={"2px"}
            sx={{ _hover: { backgroundColor: "primary", color: "tertiary",borderColor:"tertiary", border:"2px"  } }}
            
            onClick={() => handleDownload(url, name)}>
                <VStack >
                    <VscFilePdf size={30} />
                    <Text noOfLines={2} >{truncateStringLength(name, 5)}</Text>
                </VStack>
            </Button>
        </Box>
    </GridItem>
}




function Documents({pdfList}) {
    return (
        <>
                    <Box p='16px' my={{ sm: "24px", md: "0px" }} >
                        <Flex direction='column'  >
                            <Box p='12px 5px' mb={{ sm: '12px', md: '0px' }}>
                                <Text fontSize='25px' fontWeight='bold'>
                                    Documentations
                                </Text>
                                {pdfList.length >0 ?<Text>Click on the PDF to download it</Text>:<Text>No documents available</Text>}
                            </Box>
                            <Box>
                               
                                <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                                    {pdfList.map((pdfItem) => (
                                        <PDFComponent key={pdfItem.name} name={pdfItem.name} url={pdfItem.url} />
                                    ))}
                                </Grid>
                            </Box>
                        </Flex>
                    </Box>
        </>
    );
}

export default Documents;
