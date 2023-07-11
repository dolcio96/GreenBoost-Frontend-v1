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
    GridItem,
    Grid,
    useRadioGroup,
    useDisclosure,
    Img,
    Heading,
    HStack,
} from '@chakra-ui/react'
import RecommendIcon from '@mui/icons-material/Recommend';
import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
//import ProjectDetailHeaderComponent from "./headerComponent"
//import ProjectDetailGalleryComponent from "./galleryComponentOLD"
import ProjectDetailGalleryComponent from "./imgGalleryComponent"
import Message from '@components/modal/message'
import Modal from "./modal"

import { useRouter } from "next/router";
import { useSession } from "next-auth/react"

const { getChartService } = require('services');

import Img2 from "@public/Images/foresta3.jpg"

import { mapIcon } from "@lib/mapIcon";


const ProjectDetails = (props) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const project = props.project
    const price = project?.price_per_unit
    const n_available = project?.carbon_credits.length
    const [quantity, setQuantity] = React.useState(n_available)
    const handleChange = (v) => setQuantity(v)
    const router = useRouter()
    const { data: session, status } = useSession()
    const { isOpen, onOpen, onClose } = useDisclosure()
    function onBuyNow() {
        router.push({
            pathname: '/order',
            query: { project: JSON.stringify(props.project), price: price, quantity: quantity }
        }, '/order')
    }

    async function addToChart() {

        const buyerID = session.user.id;

        const response = await fetch("/api/backend/cart/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ buyerID: buyerID, projectID: project.id, quantity: quantity }),
        });
        console.log(response)

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        else {
            onOpen()
            return await response.json()
        }
    }

    return (<>
        <Message isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"The product has been added to cart!"} bgColor={"primary"}></Message>
        <Center ml="50px" mr="50px" h="85vh">
            <Box
                align='center'
                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                p="5px"
                mt="10px"
                mb="10px"
                borderRadius={5}
                bg="tertiary"

            >
                <Grid templateColumns={{ base: "1fr", lg: "repeat(5, 1fr)" }} h="60vh" >
                    <GridItem colSpan={{ base: 5, lg: 4 }} justifyContent={"center"} >
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} h="60vh" >
                            <GridItem colSpan={{ base: 2, lg: 1 }} justifyContent={"center"} m={2}>
                                {/* <ResponsiveCarousel /> */}
                                <Img src={Img2.src} display={"grid"} minW={"100%"} minH={"100%"}
                                    maxW={"100%"} position={"absolut"} top={"0"} left={"0"} objectFit="cover" borderRadius={5} />
                            </GridItem>
                            <GridItem colSpan={{ base: 2, lg: 1 }} justifyContent={"center"} m={2}>
                                <VStack justifyContent="space-between" h="full">
                                    <Center>
                                        <Heading color="primary">
                                            NOME PROGETTO
                                        </Heading>
                                    </Center>
                                    <Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl libero, semper nec hendrerit eu, laoreet at ante. Donec sed urna tempus, facilisis mi non, placerat ligula. Mauris interdum egestas eleifend. Aenean ut libero elementum, pulvinar enim nec, feugiat ipsum. Vestibulum ullamcorper augue ante, ut pharetra mi sollicitudin id. Praesent commodo ante sed justo elementum ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                                    </Text>
                                    <Center>
                                        <Text fontSize={30} color="primary">
                                            Available Quantity: {n_available}
                                        </Text>
                                    </Center>
                                    <Box w="full" display={"flex"}>
                                        <Box flex="1">
                                            <Text>Start 30/04/2024</Text>
                                            <Text>End 31/12/2024</Text>
                                        </Box>
                                        <Center>
                                            <Box flex="1"> {mapIcon("forest", "48px", "green")}</Box>
                                        </Center>
                                        <Center flex="1">
                                            <Text cursor={"pointer"} >US Carolina</Text>
                                        </Center>
                                    </Box>
                                </VStack>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={{ base: 5, lg: 1 }} justifyContent={"center"} m={2} >
                        <Center bg="primary" h="full" borderRadius={5} color="tertiary" >
                            <VStack justifyContent="space-between" m={2} fontSize={24}>
                                <HStack w="full" justifyContent="space-between">
                                    <Text>Price:</Text>
                                    <Text>{price} €/CC</Text>
                                </HStack>
                                <HStack w="full" justifyContent="space-between">
                                    <Center><Text>Amount:</Text></Center>
                                    <NumberInput w='50%' variant="flushed" min={1} max={n_available} quantity={quantity} onChange={handleChange} >
                                        <NumberInputField textAlign={'right'} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </HStack>
                                <HStack w="full" justifyContent="space-between">
                                    <Text>Costs (10%):</Text>
                                    <Text>{(quantity * price * 0.1).toFixed(2)} €</Text>
                                </HStack>
                                <Divider />
                                <HStack fontWeight={"bold"} w="full" justifyContent="space-between">
                                    <Text >Total:</Text>
                                    <Text>{(quantity * price * 1.1).toFixed(2)} €</Text>
                                </HStack>
                                <Button backgroundColor="tertiary" color="primary" onClick={addToChart}>Add to chart</Button>
                            </VStack>
                        </Center>
                    </GridItem>
                </Grid>

            </Box>


        </Center>
    </>)

}

export default ProjectDetails

