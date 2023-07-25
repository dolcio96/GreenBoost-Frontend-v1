import React, { useState } from "react";
import {
    Box,
    Center,
    Flex,
    Text,
    Divider,
    Heading,
    VStack,
    HStack
    , Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { DeleteOutline } from "@mui/icons-material";
import { motion } from "framer-motion"

const OrderRecap = ({ project_rows, totalQuantity = 10, totalValue = 40 }) => {


    return (
        <>
            <Flex
                w={{ sm: "100%" }}
                direction="column"
                boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                backgroundColor="primary"
                textColor={"tertiary"}
                borderRadius={5}
                fontSize={"3xl"}
                gap="3"
                p={"4"}
            >


                <Box border={"3px"} borderColor={"red"}>
                    <VStack justifyContent={"space-between"} >

                        <Heading>Projects List</Heading>
                        <Center >
                            <TableContainer>
                                <Table variant='unstyled'>
                                    <Thead  >
                                        <Tr>
                                            <Th><Center><Text textColor={"tertiary"}>N</Text></Center></Th>
                                            <Th><Center><Text textColor={"tertiary"}>Project Name</Text></Center></Th>
                                            <Th><Center><Text textColor={"tertiary"}> Quantity (CC)</Text></Center></Th>
                                            <Th><Center><Text textColor={"tertiary"}> Price per Unit (€/CC)</Text></Center></Th>
                                            <Th><Center><Text textColor={"tertiary"}> Value (€)</Text></Center></Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        {project_rows.map((row, i) => (
                                            <Tr>
                                                <Td><Center><Text>{i + 1}</Text></Center></Td>
                                                <Td><Center><Text>{row.project.name}</Text></Center></Td>
                                                <Td><Center><Text> {row.quantity} </Text></Center></Td>
                                                <Td><Center><Text> {row.project.price_per_unit.toFixed(2)}</Text></Center></Td>
                                                <Td><Center><Text> {(row.project.price_per_unit * row.quantity).toFixed(2)}</Text></Center></Td>
                                                <Td><Center cursor={"pointer"}>
                                                    <motion.box
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}>
                                                        <DeleteOutline />
                                                    </motion.box>
                                                </Center>
                                                </Td>
                                            </Tr>))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Center>
                    </VStack>
                </Box>
                <Divider size={"5xl"} color />
                <VStack justifyContent={"space-between"} >

                    <Heading>Checkout</Heading>
                    <Center >
                        <TableContainer>
                            <Table variant='unstyled'>
                                <Tbody>
                                    <Tr>
                                        <Td><Text>Total Quantity</Text></Td>
                                        <Td><Text textAlign={"right"}>{totalQuantity} CC</Text></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Text>Total Amount</Text></Td>
                                        <Td><Text textAlign={"right"}>{totalValue.toFixed(2)} €</Text></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Text>Costs (10%)</Text></Td>
                                        <Td><Text textAlign={"right"}>{totalValue.toFixed(2)} €</Text></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Text fontWeight={"bold"}>Total</Text></Td>
                                        <Td><Text fontWeight={"bold"} textAlign={"right"}>{(totalValue * 1.1).toFixed(2)} €</Text></Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </Center>
                </VStack>
            </Flex>
        </>
    )

}

export default OrderRecap

