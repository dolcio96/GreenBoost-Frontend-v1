import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import {
    Box,
    Center
} from "@chakra-ui/react";




const Paypal = () => {



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
                                alert(`Transaction completed by ${name}`);
                            });
                        }}
                    />
                </Center>

            </Box>



        </>
    )

}

export default Paypal

