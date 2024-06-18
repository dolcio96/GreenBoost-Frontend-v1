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



//const pdfList = [{ name: "Nome1", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }, { name: "Nome2", url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" }]

function UploadDocument() {
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
    return (
        <>

            <Flex direction='column'  >
                    <Card p='16px' my={{ sm: "24px", md: "0px" }} >
                        <Flex direction='column'  >
                            <CardHeader p='12px 5px' mb={{ sm: '12px', md: '0px' }}>
                                <Text fontSize='25px' fontWeight='bold'>
                                    Upload Document
                                </Text>
                            </CardHeader>
                            <CardBody>
                                <Box p={3} >

                                    <FormProvider {...methods}>
                                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                                            <Stack spacing={3}>
                                                <FormControl isRequired>
                                                  {/*  <DropzoneField files={files} setFiles={setFiles} />*/} 
                                                </FormControl >
                                                <Center>{thumbs}</Center>
                                                <Button
                                                    //isLoading={isSubmitting} -->Capire dove prendere, se da methods
                                                    type='submit'
                                                    loadingText="Submitting"
                                                    color="primary" borderColor={"primary"} 
                                                    border={"2px"}
                                                    sx={{ _hover: { backgroundColor: "primary", color: "tertiary",borderColor:"tertiary", border:"2px"  } }}
                                                >Send Documentations</Button>
                                            </Stack>
                                        </form>
                                    </FormProvider>
                                </Box>
                            </CardBody>
                        </Flex>
                    </Card>
            </Flex>
        </>
    );
}

export default UploadDocument;
