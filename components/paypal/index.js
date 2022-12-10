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

function Checkout() {
    const router = useRouter()
    order_info = {
        "id": "123456789",
        "Seller": "Azienda1",
        "Buyer": "Azienda2",
        "Project": "ProjectName",
        "CC": "30",
        "Type": ["Forest", "Biochimic"],
        "Location": "USA",
        "Date": "30-04-1996",
        "Expiration": "31-12-2022"
    }
    orderService.submitOrder(orderInfo).then((response) => {
        if (response.ok) {
            router.push('/')
        } else {
            alert(response.status)
        }
    })



    //const myTimeout = setTimeout(console.log(2000), 5000);
    /* onOpen().then(useEffect(() => {
 
         Router.push('/')
     }))*/

}




const Paypal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter()

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
                                            value: "0.01",
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                const name = details.payer.name.given_name;

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

