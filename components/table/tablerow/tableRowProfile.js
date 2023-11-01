import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
function TableRowProfile({ info }) {

    const rowInfo =  info.slice(0, -1)
    const txLink = info[info.length-1]


    return (
        <Tr>
            {
                rowInfo.map((El, index) => {
                    return (
                        <Td key={index}> {El}</Td>

                    )
                })}
                <Td><a href={txLink}><ExternalLinkIcon boxSize={8} cursor={"pointer"} /></a></Td>
        </Tr>
    );
}

export default TableRowProfile;
