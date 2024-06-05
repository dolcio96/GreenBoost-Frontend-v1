import {
    Flex,
    Box,
    Container,
    Center,
    Heading,
    Button,
    useDisclosure,
    Text,
    Link
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

import { useSession } from "next-auth/react"
import { useForm, FormProvider } from 'react-hook-form'
import UploadProjectForm from "@components/sell/uploadProjectForm"
import axios from 'axios';

import Message from '@components/modal/message'
import PopUpContactUs from '@components/home/hero/popUp'

import { useTranslation } from "react-i18next";

async function call_function() {
    const response = await fetch("/api/backend/getCustomerData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userID: 75317, userType: 'buyer' }),
    });
    console.log(response)
}

const CreateProject = () => {

    /*const [files, setFiles] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
    }, []);

    const methods = useForm();

    //Add the seller ID
    const { data: session } = useSession()

    async function onSubmit(project) {
        //console.log(files)

        // const pdf = await fetch(files[0].preview).then(async data => await data.blob() )
        // console.log(pdf)
        if (session && session?.user.customer_type == "seller") {


            project.sellerID = session?.user?.id
            project.file = files[0]
            const form_data = new FormData()
            form_data.append('file', files[0])
            console.log(project.file)
            var response
            try {
                response = await axios.post('http://localhost:1234/api/project/upload', form_data, {
                    headers: { 'Content-Type': 'application/json' },
                });
            } catch (error) {
                console.error('Error uploading file:', error);
            }

            return response
        }
        else{
            <Message isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"For Create a Project Login as Seller"} bgColor={"danger"}></Message>
        }
    }
*/
    let { t } = useTranslation();
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopUpOpen(!isPopUpOpen);
    };
    const [animateComponents, setAnimateComponents] = useState(false);
    const toggleAnimation = () => {
        setAnimateComponents(!animateComponents);
    };
    return (
        <>
        {/* <Button onClick={call_function}>asd</Button> */}
        <Center minH={"90vh"}>
            <Box>
            <Box mb={1} >
                <Center p={2} flexDirection={"column"}>
                    <Heading>SELL</Heading>
                    <Text>Coming Soon</Text>
                </Center>
            </Box>
            <Center p="4" >
                <Button rounded="full" h={"50px"} color={"#ffffff"} backgroundColor={"quaternary"} _hover={{ color: "quaternary", backgroundColor: "#ffffff", borderWidth: "2px", borderColor: "quaternary" }} onClick={() => {
                    togglePopUp();
                    toggleAnimation();
                }}><Text fontSize={20}> Compensa ora le tue emissioni 🌍</Text></Button>
            </Center>

            <PopUpContactUs isOpen={isPopUpOpen} onClose={togglePopUp} />
            </Box>
            </Center>
            {


            /*
        <>
            {(!session || session?.user.customer_type == "buyer") &&
                <Message isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"For Create a Project Login as Seller"} bgColor={"danger"}></Message>

            }
            <Container bg="#b7e4c7" maxW="full" mt={0} centerContent overflow="hidden">
                <Flex >

                    <Box
                        bg="#40916c"
                        color="white"
                        borderRadius="lg"
                        m={{ sm: 4, md: 16, lg: 10 }}
                        p={{ sm: 5, md: 5, lg: 16 }}>
                        <Box mb={{ sm: "10px", lg: "40px" }}>
                            <Center>
                                <Heading>Upload your Project</Heading>
                            </Center>
                        </Box>
                        <Flex direction={"column"}>

                            <FormProvider {...methods}>
                                <form onSubmit={methods.handleSubmit(onSubmit)}>
                                    <UploadProjectForm files={files} setFiles={setFiles} />
                                    <Button
                                        //isLoading={isSubmitting} -->Capire dove prendere, se da methods
                                        type='submit'
                                        loadingText="Submitting"
                                        bg={"#b7e4c7"}
                                        color={"#40916c"}>Create Project</Button>
                                </form>
                            </FormProvider>
                        </Flex>

                    </Box>
                </Flex>
            </Container>

        </>  */} </>)

}

export default CreateProject
