
import {
    Flex,
    Textarea,
    Box,
    Text,
    Container,
    Center,
    Heading,
    Input,
    Button
} from '@chakra-ui/react';

//import { readFile } from '@lib/parser';


import Dropzone from "@components/createproject/dropzone";

import Select from 'react-select';
const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextIB = ({ children }) => {
    return <Text w={{ md: "100%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};

const colourOptions = [
    { value: 'Avoided Conversation', label: 'Avoided Conversation', color: '#40916c', isFixed: true },
    { value: 'Biomass/Biogas', label: 'Biomass/Biogas', color: '#40916c' },
    { value: 'Solar/Wind', label: 'Solar/Wind', color: '#40916c' },
    { value: 'Forestry', label: 'Forestry', color: '#40916c', isFixed: true },
];

const CreateProject = () => {


    const parseAndValidate = async (file) => {
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
    };



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
                                <Heading>Create your Projec</Heading>
                            </Center>
                        </Box>
                        <Flex direction={"column"}>
                            <FlexContainerIB>
                                <TextIB>Company Name:</TextIB>
                                <Input align='center' mb='18px' mr='10px' variant='flushed' />
                            </FlexContainerIB>

                            <FlexContainerIB>
                                <TextIB>Project Name:</TextIB>
                                <Input align='center' mb='18px' mr='10px' variant='flushed' />
                            </FlexContainerIB>

                            <FlexContainerIB >
                                <TextIB>Project Type:</TextIB>
                                <Box color='#40916c' style={{ color: '#40916c' }} py={{ lg: "20px" }}>
                                    <Select
                                        color="#40916c"
                                        bg={"#b7e4c7"}
                                        //defaultValue={[colourOptions[2], colourOptions[3]]}
                                        isMulti
                                        name="projectTypes"
                                        options={colourOptions}
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                    />
                                </Box>
                            </FlexContainerIB>
                            <FlexContainerIB>
                                <TextIB >Project Description:</TextIB>
                                <Box my={"15px"}>
                                    <Textarea />
                                </Box>
                            </FlexContainerIB>

                            <FlexContainerIB>
                                <TextIB>Carbon Credit Quantity:</TextIB>
                                <Input align='center' mb='18px' mr='10px' variant='flushed' />
                            </FlexContainerIB>
                            <FlexContainerIB>
                                <TextIB>Single Carbon Credit Value:</TextIB>
                                <Input align='center' mb='18px' mr='10px' variant='flushed' />
                            </FlexContainerIB>
                            <FlexContainerIB>
                                <TextIB>Upload Certification:</TextIB>
                                <Box py={{ lg: "20px" }}>
                                    <Dropzone onFileAccepted={importFile} />
                                </Box>
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
                            <Button bg={"#b7e4c7"} color={"#40916c"}>Create Project</Button>



                        </Flex>






                    </Box>
                </Flex>
            </Container>

        </>)

}

export default CreateProject
