import {
    Flex,
    Textarea,
    Box,
    Text,
    Container,
    Center,
    Heading,
    Input,
    Button,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { readFile } from '@lib/parser';
import { useDropzone } from 'react-dropzone'
import { useForm, Controller } from 'react-hook-form'

import Dropzone from "@components/createproject/dropzone";

import Select from 'react-select';
import { VscFilePdf } from "react-icons/vsc";
import Project from 'pages/projects/[pid]';


const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextIB = ({ children }) => {
    return <Text w={{ md: "100%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};

const typeOptions = [
    { value: 'Avoided Conversation', label: 'Avoided Conversation', color: '#40916c', isFixed: true },
    { value: 'Biomass/Biogas', label: 'Biomass/Biogas', color: '#40916c' },
    { value: 'Solar/Wind', label: 'Solar/Wind', color: '#40916c' },
    { value: 'Forestry', label: 'Forestry', color: '#40916c', isFixed: true },
];



function onSubmit(project) {
    return alert(JSON.stringify(project, null, 4))
}




const CreateProject = () => {
    const [files, setFiles] = useState([]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: '.pdf',
        maxFiles: 1,
        multiple: false,
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm()

    /*  const parseAndValidate = async (file) => {
 
         const buffer = await readFile(file);
 
         try {
             const data = parse(buffer);
 
             set({ valid: true });
 
             return data;
         } catch (_) {
             set({ valid: false });
 
             return false;
         }
     };
 
     const importFile = async (file) => {
                const data = await parseAndValidate(file);
 
         if (data) {
             replaceEditorState(data);
             onClose();
         } 
 
         setFiles(acceptedFiles.map(file => Object.assign(file, {
             preview: URL.createObjectURL(file)
         })));
 
     };*/

    const thumbs = files.map(file => (
        <Box key={file.name} mb="15px">
            <Flex direction={"row"}>
                <VscFilePdf style={{ marginRight: "20px" }} size="30px" color='white' />
                <Text>{file.name}</Text>
            </Flex>
        </Box>
    ));

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FlexContainerIB>
                                    <TextIB>Company Name:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' {...register('companyName')} />
                                    </FormControl>
                                </FlexContainerIB>

                                <FlexContainerIB>
                                    <TextIB>Project Name:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' {...register('projectName')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Country:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' {...register('country')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Latituede:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' type="number" {...register('latitude')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Longitude:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' type="number" {...register('longitude')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB >
                                    <TextIB>Project Type:</TextIB>
                                    <Box color='#40916c' style={{ color: '#40916c' }} py={{ lg: "20px" }}>
                                        <FormControl isRequired>
                                            <Controller
                                                control={control}
                                                name="projectTypes"
                                                render={({ field: { onChange, value, ref } }) => (
                                                    <Select
                                                        color="#40916c"
                                                        bg={"#b7e4c7"}
                                                        inputRef={ref}
                                                        isMulti
                                                        options={typeOptions}
                                                        value={typeOptions.find(c => c.value === value)}
                                                        onChange={(val) => onChange(val.map((c) => c.value))}
                                                        classNamePrefix="select"
                                                    />
                                                )}
                                            />
                                        </FormControl>
                                    </Box>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB >Project Description:</TextIB>
                                    <Box my={"15px"}>
                                        <FormControl isRequired>
                                            <Textarea {...register('description')} />
                                        </FormControl >
                                    </Box>
                                </FlexContainerIB>

                                <FlexContainerIB>
                                    <TextIB>Carbon Credit Quantity:</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' type="number" {...register('quantity')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Single Carbon Credit Value (€):</TextIB>
                                    <FormControl isRequired>
                                        <Input align='center' mb='18px' mr='10px' variant='flushed' type="number" {...register('value')} />
                                    </FormControl>
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Upload Certification:</TextIB>
                                    <Box py={{ lg: "20px" }}>
                                        <Dropzone getRootProps={getRootProps} getInputProps={getInputProps} isDragActive={isDragActive} />
                                    </Box>
                                    {thumbs}
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <FormControl isRequired>
                                        <Checkbox /> Accetta i termini e condizini
                                    </FormControl>
                                </FlexContainerIB>



                                {/* 
                                <Input align='center' mb='18px' variant='flushed' placeholder='ZIP Code' />
                                <Flex direction='row'>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Country' />
                                    <Input align='center' mb='18px' variant='flushed' placeholder='State' />
                                </Flex>
                                <Flex direction='row'>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='City' />
                                    <Input align='center' mb='18px' variant='flushed' placeholder='ZIP Code' />
                                </Flex>
                                <Input align='center' mb='18px' variant='flushed' placeholder='Name' />*/}

                                <Button
                                    isLoading={isSubmitting}
                                    type='submit'
                                    loadingText="Submitting"
                                    bg={"#b7e4c7"}
                                    color={"#40916c"}>Create Project</Button>


                            </form>
                        </Flex>

                    </Box>
                </Flex>
            </Container>

        </>)

}

export default CreateProject
