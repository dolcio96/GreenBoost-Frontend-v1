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

import PopUp from "@components/modal/message"

import PaypalComponet from "@components/paypal"
import OrderRecap from "@components/order/orderRecap"

const Order = () => {
const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Box my="20">
                <Center>
                    <Flex direction={"column"} w="50%" gap={"10"}>
                        <Box> 
                            <OrderRecap />
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
                <Button onClick={onOpen}>Open Modal</Button>
                <PopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"Thank you for your order!"} text={"Now you can visit your personal area to review the order"} bgColor={"primary"}/>
            </Box>
        </>
    )

}

export default Order

