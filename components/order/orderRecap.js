import React, { useState, useEffect } from 'react';
import {
    Box,
    Center,
    Flex,
    Text,
    Divider,
    Heading,
    VStack,
    HStack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Button,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from "@chakra-ui/react";
import { DeleteOutline } from "@mui/icons-material";
import { motion } from "framer-motion"
import { useRouter } from 'next/router'





const OrderRecap = ({ project_rows_array }) => {
    const router = useRouter()

    const [project_rows, setProjectRows] = useState(project_rows_array);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    function setQuantity() {
        var quantity = 0;
        project_rows.map((row, i) => (
            quantity += row.quantity
        ))
        setTotalQuantity(quantity)
    }

    function setValue() {
        var value = 0;
        project_rows.map((row, i) => (
            value += row.quantity * row.project.price_per_unit
        ))
        setTotalValue(value)
    }
    useEffect(() => {
        setQuantity()
        setValue()
    }, [project_rows]);


    async function removeItem(i) {
        const removeBool = await removeFromCart(project_rows[i].id)
        //Scrivere la funzione che rimuove dal carrello l'item
        if (removeBool) {
            setProjectRows(project_rows.splice(i + 1));
        }
    }

    async function removeFromCart(rowId) {

        //const buyerID = session.user.id;

        const response = await fetch("/api/backend/cart/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rowId: rowId }),
        });
        console.log(response)

        if (!response.ok) {
            return false
        }
        else {
            return true
        }
    }

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
                                        {project_rows && project_rows.map((row, i) => (
                                            <Tr>
                                                <Td><Center><Text>{i + 1}</Text></Center></Td>
                                                <Td><Center><Text>{row.project.name}</Text></Center></Td>
                                                <Td><Center><Text> {row.quantity} </Text></Center></Td>
                                                <Td><Center><Text> {+(row.project.price_per_unit)}</Text></Center></Td>
                                                <Td><Center><Text> {+(row.project.price_per_unit * row.quantity)}</Text></Center></Td>
                                                <Td>
                                                    <Center cursor={"pointer"}>
                                                        <motion.box
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.9 }}>
                                                            <DeleteOutline onClick={() => removeItem(i)} />
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
                                        <Td><Text textAlign={"right"}>{(totalValue * 0.1).toFixed(2)} €</Text></Td>
                                    </Tr>
                                    <Tr>
                                        <Td><Text fontWeight={"bold"}>Total</Text></Td>
                                        <Td><Text fontWeight={"bold"} textAlign={"right"}>{(totalValue * 1.1).toFixed(2)} €</Text></Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>

                    </Center>
                    <Center>
                        <Button color={"primary"} onClick={() => router.push('/checkout')}>Checkout</Button>
                    </Center>
                </VStack>
            </Flex>
        </>
    )

}

export default OrderRecap

