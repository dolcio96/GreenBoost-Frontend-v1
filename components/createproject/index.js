import {
    Flex,
    Box,
    Container,
    Center,
    Heading,
    Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { uploadProjectService } from 'services';
import { useSession } from "next-auth/react"
import { useForm, FormProvider } from 'react-hook-form'
import UploadProjectForm from "@components/createproject/uploadProjectForm"
import axios from 'axios';



const CreateProject = () => {
    const [files, setFiles] = useState([]);


    const methods = useForm();

    //Add the seller ID
    const { data: session } = useSession()



    async function onSubmit(project) {
        //console.log(files)

       // const pdf = await fetch(files[0].preview).then(async data => await data.blob() )
       // console.log(pdf)
        project.sellerID = session?.user?.id
        project.file = files[0]
        console.log(project.file)
        var response
        try {
            response = await axios.post('http://localhost:1234/api/project/upload', project, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
          } catch (error) {
            console.error('Error uploading file:', error);
          }
      
        return response
    }


    return (
        <>
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
                                    <UploadProjectForm files={files} setFiles={setFiles}/>
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

        </>)

}

export default CreateProject
