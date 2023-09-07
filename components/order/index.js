import React, { useState } from "react";
import {
    Heading,
    Box,
    Center,
    Flex,
    Button,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from 'next/router'

import CheckoutFormComponent from "@components/checkoutForm";
//import PaypalComponet from "@components/paypal"
import OrderRecapComponent from "@components/order/orderRecap"

import { useSession } from "next-auth/react"

import { orderService } from 'services';
import PopUp from "@components/modal/message"

const Order = ({ cart }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const router = useRouter();
    const { data: session, status } = useSession()

    var project_rows_array = []
    var totalQuantity = 0
    var totalValue = 0
    var totalValueWithFee = 0

    cart.cart_row.map(row => (
        project_rows_array.push(row)

    ))
    cart.cart_row.map(row => (
        totalQuantity = totalQuantity + row.quantity
    ))
    cart.cart_row.map(row => (
        totalValue = totalValue + (row.quantity * row.project.price_per_unit)
    ))

    totalValueWithFee = (totalValue * 1.1).toFixed(2)


    const buyer = session?.user.company.company_id

    const today = new Date();

    function Checkout() {
        const order_info = {
            Seller: project.seller.company.company_name,
            Buyer: buyer,
            Project: project.id,
            CC: totalQuantity,
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

<Box position="relative" height="100vh"> {/* Add position: relative and height: 100vh to the container */}
        {/*  <BackgroundAnimatedComponent />*/}
        <Center gap={"10"}>
          <Heading fontSize={48} color={"primary"}>
            ORDER RECAP
          </Heading>
        </Center>
        <Center > {/* Use position: absolute and set top, left, right, and bottom to 0 */}
          <Flex direction={"column"} w="50%" gap={"10"}>

            <OrderRecapComponent project_rows_array={project_rows_array} />
          </Flex>
        </Center>
      </Box>
           {/* <Box my="20">
                <Center>
                    <Flex direction={"column"} w="50%" gap={"10"}>
                        <Box>
                       
                        </Box>
                        <Box>
                            <Text textAlign="center" fontSize={"3xl"}>
                                Choose your favourite payment method
                            </Text>
                        </Box>
                        <Box >
                            <CheckoutFormComponent />
                        </Box>
                    </Flex>
                </Center>
                <PopUp isOpen={isOpen} onOpen={onOpen} onClose={onClose} header={"Thank you for your order!"} text={"Now you can visit your personal area to review the order"} bgColor={"primary"} footer={"Check on your profile"} href={"/profile/profile-overview"} />
            </Box> */}
        </>
    )

}

export default Order

