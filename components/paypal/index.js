import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = () => {



    return (
        <>
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

        </>
    )

}

export default Paypal

