// Chakra imports
import {

    Box,
    Button,
    Flex,
    Grid,
    Icon,
    Image,
    Link,
    Spacer,
    Text,
    Input,
    Center,
    useColorModeValue,
} from "@chakra-ui/react";
import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";
import { RiMastercardFill } from "react-icons/ri";

const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextIB = ({ children }) => {
    return <Text w={{ md: "50%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};


function ProfileInfoSeller() {
    return (
        <>
            <Flex direction='column'  >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>

                    <Card p='16px' my={{ sm: "24px", md: "0px" }}>
                        <CardHeader>
                            <Box p='12px 5px' mb='12px'>
                                <Heading>
                                    Profile Informations
                                </Heading>
                            </Box>
                        </CardHeader>
                        <CardBody px='5px'>
                            <Flex direction='column' >
                                <FlexContainerIB>
                                    <TextIB>Password:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Password' />
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Repeat Password:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Repeat Password' />
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Street Address:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Street Address:' />
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>Country:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Country' />
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>State:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='State' />
                                </FlexContainerIB>
                                <FlexContainerIB>
                                    <TextIB>ZIP Code:</TextIB>
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='ZIP code' />
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
                                <Button>Save</Button>



                            </Flex>
                        </CardBody>
                    </Card>
                    <Card p='16px' my={{ sm: "24px", md: "0px" }} >
                        <Flex direction='column'  >
                            <CardHeader p='12px 5px' mb={{ sm: '12px', md: '0px' }}>
                                <Text fontSize='25px' fontWeight='bold'>
                                    Payment Method
                                </Text>
                            </CardHeader>
                            <Flex direction={{ sm: "column", md: "row" }} justifyContent={'space-between'}>

                                <Card
                                    backgroundImage={
                                        "linear-gradient(180deg, #12a30c 0%, #81db92 100%)"

                                    }
                                    borderRadius='20px'
                                    backgroundRepeat='no-repeat'
                                    background='cover'
                                    bgPosition='10%'
                                    p='16px'
                                    h={{ sm: "220px", md: "100%" }}
                                    w={{ sm: "220px", md: "50%" }}

                                    mt={{ md: "50px" }}>
                                    <CardBody h='100%' w='100%'>
                                        <Flex
                                            direction='column'
                                            color='white'
                                            h='100%'
                                            p='0px 10px 20px 10px'
                                            w='100%'>
                                            <Flex justify='space-between' align='center'>
                                                <Text fontSize='md' fontWeight='bold'>
                                                    Green Boost
                                                </Text>
                                                <Icon
                                                    as={RiMastercardFill}
                                                    w='48px'
                                                    h='auto'
                                                    color='gray.400'
                                                />
                                            </Flex>
                                            <Spacer />
                                            <Flex direction='column'>
                                                <Box>
                                                    <Text
                                                        fontSize={{ sm: '2xl', xl: 'xl', '2xl': '2xl' }}
                                                        letterSpacing='2px'
                                                        fontWeight='bold'>
                                                        7812 2139 0823 XXXX
                                                    </Text>
                                                </Box>
                                                <Flex mt='14px'>
                                                    <Flex direction='column' me='34px'>
                                                        <Text fontSize='xs'>VALID THRU</Text>
                                                        <Text fontSize='xs' fontWeight='bold'>
                                                            05/24
                                                        </Text>
                                                    </Flex>
                                                    <Flex direction='column'>
                                                        <Text fontSize='xs'>CVV</Text>
                                                        <Text fontSize='xs' fontWeight='bold'>
                                                            09X
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </CardBody>
                                </Card>


                                <Box w={{ sm: "100%", md: "50%", lg: "50%" }} pl={{ md: "20px" }} mt={{ sm: "20px" }}>
                                    <Flex direction='column'>
                                        <FlexContainerIB>
                                            <TextIB>Number:</TextIB>
                                            <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Number' />
                                        </FlexContainerIB>
                                        <FlexContainerIB>  <Flex direction='row' >
                                            <Box w={{ sm: "100%" }}>
                                                <TextIB>Name:</TextIB>
                                                <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='Name' />
                                            </Box>
                                            <Box w={{ sm: "100%" }}>
                                                <TextIB>Surname:</TextIB>
                                                <Input align='center' mb='18px' mr='10px' ml='10px' variant='flushed' placeholder='Surname' />
                                            </Box>
                                        </Flex>
                                        </FlexContainerIB>

                                        <FlexContainerIB>  <Flex direction='row' >
                                            <Box w={{ sm: "100%" }}>
                                                <TextIB>Validity:</TextIB>
                                                <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='00/00' />
                                            </Box>
                                            <Box w={{ sm: "100%" }}>
                                                <TextIB>CCV:</TextIB>
                                                <Input align='center' mb='18px' mr='10px' ml='10px' variant='flushed' placeholder='xxx' />
                                            </Box>
                                        </Flex>
                                        </FlexContainerIB>

                                    </Flex>
                                </Box>

                            </Flex >

                            <CardHeader p='12px 5px' mb={{ sm: '12px', md: '0px' }}>
                                <Text fontSize='25px' fontWeight='bold'>
                                    Billing Informations
                                </Text>
                            </CardHeader>
                            <CardBody h="173px">

                            </CardBody>

                            <Button>Save</Button>
                        </Flex>

                    </Card>


                </Grid>

            </Flex>


        </>
    );
}

export default ProfileInfoSeller;
