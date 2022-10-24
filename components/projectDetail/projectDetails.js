import React, { useEffect } from "react";
import {
    Text,
    Flex,
    Button,
    Icon,
    Box,
    VStack,
    Stack,
    Divider
} from '@chakra-ui/react'




const ProjectDetails = () => {

    return (<>
        <Flex direction='column' pt={{ base: "10px", md: "10px", lg: "10px" }}>
            <Flex
                direction={{ sm: "column", md: "row" }}
                mb='24px'
                maxH='330px'
                justifyContent={{ sm: "center", md: "space-between" }}
                align='center'
                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
                p='5px'
                pl='24px'
                pr='24px'
                borderRadius='20px'>
                <Flex
                    mt={{ sm: "60px", md: "0px" }}
                    align='center'
                    mb={{ sm: "10px", md: "0px" }}
                    direction={{ sm: "column", md: "row" }}
                    w={{ sm: "100%" }}
                    textAlign={{ sm: "center", md: "start" }}>


                    <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
                        <Text
                            fontSize={{ sm: "lg", lg: "xl" }}
                            fontWeight='bold'
                            ms={{ sm: "8px", md: "0px" }}>
                            Project Name
                        </Text>
                        <Text
                            fontSize={{ sm: "sm", md: "md" }}
                            fontWeight='semibold'>
                            Position
                        </Text>
                    </Flex>




                </Flex>
                <Flex
                    direction={{ sm: "column", lg: "row" }}
                    w={{ sm: "100%", md: "50%", lg: "auto" }}
                    >
                    <Box  variant='no-effects' backgroundColor="grey" p="30" borderRadius={10}>
                        <Flex
                            align='center'
                            w={{ sm: "100%", lg: "200px" }}
                            borderRadius='8px'
                            justifyContent='center'
                            py='10px'
                            cursor='pointer'>
                            <VStack
                                spacing={4}
                                align='stretch'
                            >
                                <Stack spacing={8} direction='row' >
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        Price:
                                    </Box>
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        25 €/ton
                                    </Box>
                                </Stack>
                                <Stack spacing={8} direction='row' >
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        Amount:
                                    </Box>
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        150 ton
                                    </Box>
                                </Stack>
                                <Stack spacing={8} direction='row' >
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        Costs:
                                    </Box>
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        x %
                                    </Box>
                                </Stack>
                                <Divider orientation='horizontal' />
                                <Stack spacing={8} direction='row' >
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        Total:
                                    </Box>
                                    <Box h='40px' bg='yellow.200' w={{ sm: "100%", lg: "100px" }}>
                                        200 €
                                    </Box>
                                </Stack>
                                <Button backgroundColor="green.300">Buy Now</Button>
                            </VStack>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    </>)

}

export default ProjectDetails

