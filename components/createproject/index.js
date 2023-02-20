import {
    Flex,
    Box,
    Container,
    Center,
    Heading,
    Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { userService } from 'services';

import { useForm, FormProvider } from 'react-hook-form'
import UploadProjectForm from "@components/createproject/uploadProjectForm"


function onSubmit(project) {
    return console.log(JSON.stringify(project, null, 4))
    {/*return userService.uploadProject(project).then((response) => {
        if (response.ok) {
          console.log("OK")
        } else {
          alert(response.status)
        }
      })*/}
}


const CreateProject = () => {
    const [files, setFiles] = useState([]);


    const methods = useForm();

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
                                    <UploadProjectForm />
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
