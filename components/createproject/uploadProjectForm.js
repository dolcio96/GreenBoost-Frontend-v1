import {
    Flex,
    Textarea,
    Box,
    Text,
    Input,
    FormControl,
    Checkbox
} from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone'
import Select from 'react-select';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'
import Dropzone from "@components/createproject/dropzone";
import DropzoneField from "@components/createproject/dropzoneField";
import { VscFilePdf } from "react-icons/vsc";

const typeOptions = [
    { value: 'Avoided Conversation', label: 'Avoided Conversation', color: '#40916c', isFixed: true },
    { value: 'Biomass/Biogas', label: 'Biomass/Biogas', color: '#40916c' },
    { value: 'Solar/Wind', label: 'Solar/Wind', color: '#40916c' },
    { value: 'Forestry', label: 'Forestry', color: '#40916c', isFixed: true },
];

const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextIB = ({ children }) => {
    return <Text w={{ md: "100%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};




function UploadProjectForm() {
    const [files, setFiles] = useState([]);
    const thumbs = files?.map(file => (
        <Box key={file.name} mb="15px">
            <Flex direction={"row"}>
                <VscFilePdf style={{ marginRight: "20px" }} size="30px" color='white' />
                <Text>{file.name}</Text>
            </Flex>
        </Box>
    ));
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


    const { control, register, formState: { errors, isSubmitting }, } = useFormContext(); // retrieve all hook methods
    return <>

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
                {/* <Dropzone getRootProps={getRootProps} getInputProps={getInputProps} isDragActive={isDragActive} />*/}
                <FormControl isRequired>
                    <DropzoneField files={files} setFiles={setFiles}/>
                </FormControl >
            </Box>
            {thumbs}
        </FlexContainerIB>

        <FlexContainerIB>
            <FormControl isRequired >
                <Checkbox /> Accetta i termini e condizini
            </FormControl>
        </FlexContainerIB>

    </>


}

export default UploadProjectForm
