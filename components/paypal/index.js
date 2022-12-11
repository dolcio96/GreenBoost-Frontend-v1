import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
    Box,
    Center,
    useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from 'next/router'
import PopUp from "@components/modal/message"

import { orderService } from 'services';

//import { useSession } from "next-auth/react"


const Paypal = ({Checkout, value}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()
   // const value = (quantity * price * 1.1).toFixed(2)
    //const today = new Date();
    //const { data: session, status } = useSession()
/*
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
*/
    return (
        <>
            <Box>

                <Center>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: 1//value,
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                //const name = details.payer.name.given_name;

                                Checkout();

                            });
                        }}
                    />
                </Center>

            </Box>

            <PopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"Thank you for your order!"} text={"Now you can visit your personal area to review the order"} bgColor={"primary"} />


        </>
    )

}

export default Paypal

