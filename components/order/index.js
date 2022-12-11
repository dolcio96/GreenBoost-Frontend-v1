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

import { useSession } from "next-auth/react"

const Order = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();

    const project = JSON.parse(router.query.project)
    const price = router.query.price
    const quantity = router.query.quantity
    const value = (quantity * price * 1.1).toFixed(2)
    const today = new Date();
    const { data: session, status } = useSession()

    function Checkout() {

        const order_info = {
            id: "123456789",
            Seller: project.seler.company.company_id,
            Buyer: session?.user.company.company_id,
            Project: project.id,
            CC: quantity,
            Type: ["Forest", "Biochimic"],
            Location: "USA",
            Date: today,
            Expiration: "31-12-2022"
        }

        orderService.submitOrder(order_info).then((response) => {
            if (response.ok) {
                router.push('/')
            } else {
                alert(response.status)
            }

        })

    }





    return (
        <>
            <Box my="20">
                <Center>
                    <Flex direction={"column"} w="50%" gap={"10"}>
                        <Box>
                            <OrderRecap project={project} price={price} quantity={quantity} />
                        </Box>
                        <Box>
                            <Text textAlign="center" fontSize={"3xl"}>
                                Choose your favourite payment method
                            </Text>
                        </Box>
                        <Box >
                            <PaypalComponet Checkout={Checkout} value={value} />
                        </Box>
                    </Flex>
                </Center>

            </Box>
        </>
    )

}

export default Order

