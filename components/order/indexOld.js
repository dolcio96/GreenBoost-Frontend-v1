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

import { orderService } from 'services';
import PopUp from "@components/modal/message"

const Order = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const router = useRouter();
    const { data: session, status } = useSession()

    const project = router.query.project ?  JSON.parse(router.query.project) : 'undefined'
    const buyer = session?.user.company.company_id
    const price = router.query.price
    const quantity = router.query.quantity
    const value = (quantity * price * 1.1).toFixed(2)
    const today = new Date();

    function Checkout() {
        const order_info = {
            Seller: project.seller.company.company_name,
            Buyer: buyer,
            Project: project.id,
            CC: quantity,
            Type: ["Forest", "Biochimic"],
            Location: "USA",
            Date: today,
            Expiration: "31-12-2022"
        }

        orderService.submitOrder(order_info).then((response) => {
            if (response.ok) {
                onOpen()
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
                <PopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"Thank you for your order!"} text={"Now you can visit your personal area to review the order"} bgColor={"primary"} footer={"Check on your profile"} href={"/profile/profile-overview"} />
            </Box>
        </>
    )

}

export default Order
