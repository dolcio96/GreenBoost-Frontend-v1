import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
    Box,
    Center,
    useDisclosure,
} from "@chakra-ui/react";

import { useRouter } from 'next/router'
import PopUp from "@components/modal/message"

function Checkout() {
    const router = useRouter()
    router.push('/')


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
                                            value: "0.01", //change to real value
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                onOpen();

                            });
                        }}
                    />
                </Center>

            </Box>

            <PopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} href={'/profile/profile-overview'} header={"Thank you for your order!"} text={"Now you can visit your personal area to review the order"} bgColor={"primary"} />


        </>
    )

}

export default Paypal

