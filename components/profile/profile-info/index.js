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
import Card from "@components/card/card";
import CardBody from "@components/card/cardBody";
import CardHeader from "@components/card/cardHeader";
import { RiMastercardFill } from "react-icons/ri";

const FlexContainerIB = ({ children }) => {
    return <Flex direction={{ sm: "column" }}>{children}</Flex>;
};

const TextIB = ({ children }) => {
    return <Text w={{ md: "50%" }} fontWeight='bold' fontSize="15px" mr={{ sm: "0px", md: "20px" }}>{children}</Text>;
};


function ProfileInfo() {
    return (
        <>
            <Flex direction='column'  >
                <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>

                    <Card p='16px' my={{ sm: "24px", md: "0px" }}>
                        <CardHeader p='12px 5px' mb='12px'>
                            <Text fontSize='25px' fontWeight='bold'>
                                Profile Information
                            </Text>
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
                                    <Input align='center' mb='18px' mr='10px' variant='flushed' placeholder='State' />
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
                    <Card p='16px'>
                        <Flex direction='column' >
                            <CardHeader p='12px 5px' mb='12px'>
                                <Text fontSize='25px' fontWeight='bold'>
                                    Payment Method
                                </Text>
                            </CardHeader>
                            <Center>
                                <Card
                                    backgroundImage={
                                        "linear-gradient(180deg, #12a30c 0%, #81db92 100%)"

                                    }
                                    borderRadius='20px'
                                    backgroundRepeat='no-repeat'
                                    background='cover'
                                    bgPosition='10%'
                                    p='16px'
                                    h={{ sm: "220px", md: "50%" }}
                                    w={{ lg: "50%", xl: "60%" }}
                                    gridArea={{ md: "1 / 1 / 2 / 3", xl: "1 / 1 / 2 / 3" }}>
                                    <CardBody h='100%' w='100%'>
                                        <Flex
                                            direction='column'
                                            color='white'
                                            h='100%'
                                            p='0px 10px 20px 10px'
                                            w='100%'>
                                            <Flex justify='space-between' align='center'>
                                                <Text fontSize='md' fontWeight='bold'>
                                                    Argon x Chakra
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
                                                        fontSize='2xl'
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
                            </Center>
                            <Card p='16px'>


                                <CardBody px='5px'>
                                    <Flex direction='column' w='100%'>
                                        <Flex justifyContent='space-between' mb='21px'>
                                            <Flex align='center'>

                                                <Flex direction='column'>
                                                    <Text fontSize='sm' fontWeight='bold'>
                                                        Sophie B.{" "}
                                                    </Text>
                                                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                                                        Hi! I need more information...
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Button p='0px' bg='transparent' variant='no-effects'>
                                                <Text
                                                    fontSize='10px'
                                                    fontWeight='700'

                                                    alignSelf='center'>
                                                    REPLY
                                                </Text>
                                            </Button>
                                        </Flex>
                                        <Flex justifyContent='space-between' mb='21px'>
                                            <Flex align='center'>

                                                <Flex direction='column'>
                                                    <Text fontSize='sm' fontWeight='bold'>
                                                        Sophie B.{" "}
                                                    </Text>
                                                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                                                        Awesome work, can you change...
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Button p='0px' bg='transparent' variant='no-effects'>
                                                <Text
                                                    fontSize='10px'
                                                    fontWeight='700'

                                                    alignSelf='center'>
                                                    REPLY
                                                </Text>
                                            </Button>
                                        </Flex>
                                        <Flex justifyContent='space-between' mb='21px'>
                                            <Flex align='center'>

                                                <Flex direction='column'>
                                                    <Text fontSize='sm' fontWeight='bold'>
                                                        Sophie B.{" "}
                                                    </Text>
                                                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                                                        Have a great afternoon...
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                            <Button p='0px' bg='transparent' variant='no-effects'>
                                                <Text
                                                    fontSize='10px'
                                                    fontWeight='700'

                                                    alignSelf='center'>
                                                    REPLY
                                                </Text>
                                            </Button>
                                        </Flex>

                                    </Flex>
                                </CardBody>
                            </Card>
                            <Button>Save</Button>
                        </Flex>
                    </Card>


                </Grid>

            </Flex>


        </>
    );
}

export default ProfileInfo;
