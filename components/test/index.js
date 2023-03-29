import React, { useEffect, useState } from "react";
import {
    Text,
    Flex,
    Button,
    Icon,
    Box,
    VStack,
    Input,
    Stack,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Divider,
    Center,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import RecommendIcon from '@mui/icons-material/Recommend';
import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';



import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const ProjectDetails = (props) => {
    const project = props.project
    const price = project?.carbon_credits[0].price_per_unit
    const n_available = project?.carbon_credits.length

    const [quantity, setQuantity] = React.useState(n_available)
    const handleChange = (v) => setQuantity(v)
    const router = useRouter()
    const { data: session, status } = useSession()

    function onBuyNow() {
        router.push({
            pathname: '/order',
            query: { project: JSON.stringify(props.project), price: price, quantity: quantity }
        }, '/order')
    }
    return (<>
        <Box
            ml="50px" mr="50px">
            <Flex direction='column' >
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    justifyContent={{ sm: "center", md: "space-between" }}
                    align='center'
                    boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                    p="5px"
                    mt="10px"
                    mb="10px"
                    borderRadius={5}
                >
                    <Flex
                        w={{ sm: "100%", md: "65%", lg: "75%" }}

                        m="5px"
                        p="5px"
                        direction="column"
                        justifyContent={{ sm: "center", md: "space-around" }}
                        textAlign={{ sm: "center", md: "start" }}
                    >

                        <Flex direction="row"
                            justifyContent="space-between"
                        >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <Text fontSize={{ sm: "lg", lg: "xl" }}
                                    fontWeight='bold'>Project Manager</Text>
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <RecommendIcon style={{ color: 'green' }} /> Certified By: Verra
                            </Flex>
                        </Flex>
                        <Divider borderColor='green' orientation='horizontal' />
                        <Flex fontSize={{ sm: "lg", lg: "xl" }}
                            direction="row"
                            justifyContent="space-between" >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Quantity Available:
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                {n_available}
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                {props.project?.description}
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Features and SDG:
                            </Flex>
                        </Flex>
                        <Flex direction={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                            <Text><ForestIcon style={{ color: 'green' }} /><EmojiNatureIcon style={{ color: 'green' }} /></Text>
                            <Text>More Info</Text>
                            <Text>Links</Text>
                        </Flex>

                    </Flex>
                    {status == 'authenticated' && session?.user.customer_type == "buyer" ?
                        <Flex
                            w={{ sm: "100%", md: "35%", lg: "25%" }}
                            minH="180px"
                            direction="column"
                            m="5px"
                            p="5px"
                            justifyContent={{ sm: "center", md: "space-around" }}
                            textAlign={{ sm: "center", md: "start" }}
                            boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                            backgroundColor="#EFEFEF"
                            borderRadius={5}
                        >
                            <Flex direction="row" justifyContent="space-between">
                                <Text>Price:</Text>
                                <Text>{price} €/CC</Text>
                            </Flex>
                            <Flex direction="row" justifyContent="space-between">
                                <Center><Text>Amount:</Text></Center>
                                <NumberInput w='50%' variant="flushed" min={1} max={n_available} quantity={quantity} onChange={handleChange} >
                                    <NumberInputField textAlign={'right'} />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                            <Flex direction="row" justifyContent="space-between">
                                <Text>Costs (10%):</Text>
                                <Text>{(quantity * price * 0.1).toFixed(2)} €</Text>
                            </Flex>
                            <Divider />
                            <Flex direction="row" justifyContent="space-between">
                                <Text>Total:</Text>
                                <Text>{(quantity * price * 1.1).toFixed(2)} €</Text>
                            </Flex>
                            <Button backgroundColor="green.300" onClick={onBuyNow}>Buy Now</Button>
                        </Flex> :
                        <Flex>
                            <Box>
                                <Text>
                                    For Buying CC  login as Buyer
                                </Text>
                            </Box>
                        </Flex>

                    }
                </Flex>
            </Flex>



            <Box
                align='center'
                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                p="5px"
                mt="10px"
                mb="10px"
                borderRadius={5}
            >
                <Grid templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }} gap='22px' justifyContent={"center"}>
                    <GridItem colSpan={{ base: 4, lg: 3 }} justifyContent={"center"}>

                        <Flex direction="row"
                            justifyContent="space-between"
                        >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <Text fontSize={{ sm: "lg", lg: "xl" }}
                                    fontWeight='bold'>Project Manager</Text>
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <RecommendIcon style={{ color: 'green' }} /> Certified By: Verra
                            </Flex>
                        </Flex>
                        <Divider borderColor='green' orientation='horizontal' />
                        <Flex fontSize={{ sm: "lg", lg: "xl" }}
                            direction="row"
                            justifyContent="space-between" >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Quantity Available:
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                {n_available}
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                {props.project?.description}
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Features and SDG:
                            </Flex>
                        </Flex>
                        <Flex direction={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                            <Text><ForestIcon style={{ color: 'green' }} /><EmojiNatureIcon style={{ color: 'green' }} /></Text>
                            <Text>More Info</Text>
                            <Text>Links</Text>
                        </Flex>


                    </GridItem>
                    <GridItem colSpan={{ base: 4, lg: 1 }} justifyContent={"center"}>


                        {status == 'authenticated' && session?.user.customer_type == "buyer" ?
                            <Box
                                minH="180px"
                                direction="column"
                                m="5px"
                                p="5px"
                                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                                backgroundColor={"tertiary"}
                                borderRadius={5}
                            >
                                <Flex direction="row" justifyContent="space-between">
                                    <Text>Price:</Text>
                                    <Text>{price} €/CC</Text>
                                </Flex>
                                <Flex direction="row" justifyContent="space-between">
                                    <Center><Text>Amount:</Text></Center>
                                    <NumberInput w='50%' variant="flushed" min={1} max={n_available} quantity={quantity} onChange={handleChange} >
                                        <NumberInputField textAlign={'right'} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Flex>
                                <Flex direction="row" justifyContent="space-between">
                                    <Text>Costs (10%):</Text>
                                    <Text>{(quantity * price * 0.1).toFixed(2)} €</Text>
                                </Flex>
                                <Divider />
                                <Flex direction="row" justifyContent="space-between">
                                    <Text>Total:</Text>
                                    <Text>{(quantity * price * 1.1).toFixed(2)} €</Text>
                                </Flex>
                                <Button backgroundColor="green.300" onClick={onBuyNow}>Buy Now</Button>
                            </Box> :
                                <Flex
                                    h="100%"
                                    direction="column"
                                    justifyContent={{ sm: "center" }}
                                    textAlign={{ sm: "center" }}>
                                    
                                        <Text fontWeight={"bold"}>
                                            For Buying CC  login as Buyer
                                        </Text>
                                    
                                </Flex>
                        }



                    </GridItem>

                </Grid>

            </Box>

        </Box>
    </>)

}

export default ProjectDetails

