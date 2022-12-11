import React, { useState } from "react";
import {
    Box,
    Center,
    Flex,
    Text,Divider
    ,
} from "@chakra-ui/react";


const OrderRecap = ({project, price, quantity}) => {
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
                            <Text>Project {project.id}</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Price</Text>
                            <Text>{price} €/CC</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Amount</Text>
                            <Text>{quantity} CC</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Costs (10%)</Text>
                            <Text>{(quantity * price * 0.1).toFixed(2)} €</Text>
                        </Flex>
                        <Divider size={"5xl"} color/>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Total</Text>
                            <Text>{(quantity * price * 1.1).toFixed(2)} €</Text>
                        </Flex>
                    </Flex>  
        </>
    )

}

export default OrderRecap

