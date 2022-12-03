import React, { useState } from "react";
import {
    Box,
    Center,
    Flex,
    Text,Divider
    ,
} from "@chakra-ui/react";


const OrderRecap = () => {



    return (
        <>
            <Flex
                        w={{ sm: "100%"}}
                        direction="column"
                        justifyContent={{ sm: "center", md: "space-around" }}
                        textAlign={{ sm: "center", md: "start" }}
                        boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                        backgroundColor="primary"
                        textColor={"tertiary"}
                        borderRadius={5}
                        fontSize={"3xl"}
                        gap="3"
                        p={"4"}
                    >
                        <Flex direction="row" justifyContent="center">
                            <Text>Lista dei Progetti</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Price</Text>
                            <Text>25 €/ton</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Amount</Text>
                            <Text>150 ton</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Costs (10%)</Text>
                            <Text>12 €</Text>
                        </Flex>
                        <Divider size={"5xl"} color/>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Total</Text>
                            <Text>3750,00 €</Text>
                        </Flex>
                    </Flex>  
        </>
    )

}

export default OrderRecap

