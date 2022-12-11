import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
    Box,
    Center,
    Flex,
    Button,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'


import PaypalComponet from "@components/paypal"
import OrderRecap from "@components/order/orderRecap"

const Order = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();

    const project = JSON.parse(router.query.project)
    const price = router.query.price
    const quantity = router.query.quantity


    return (
        <>
            <Box my="20">
                <Center>
                    <Flex direction={"column"} w="50%" gap={"10"}>
                        <Box> 
                            <OrderRecap project={project} price={price} quantity={quantity}/>
                        </Box>
                        <Box>
                            <Text textAlign="center" fontSize={"3xl"}>
                                Choose your favourite payment method
                            </Text>
                        </Box>
                        <Box >
                            <PaypalComponet />
                        </Box>
                    </Flex>
                </Center>

            </Box>
        </>
    )

}

export default Order

