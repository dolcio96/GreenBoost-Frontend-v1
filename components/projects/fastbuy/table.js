import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    Divider ,
    useColorModeValue
} from "@chakra-ui/react";

import Card from "@components/card/card.js";
import CardBody from "@components/card/cardBody.js";
import CardHeader from "@components/card/cardHeader.js";
import TablesTableRow from "@components/projects/fastbuy/tablerow.js";
import React from "react";
import { tablesTableData } from "@variables/general";


function Tables() {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");


    return (
        <Flex direction="column" pt={{ base: "20px", md: "10px" }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl"  fontWeight="bold" pl="20px">
                        List of selected projects 
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table size={{sm:'sm',md:'md', lg:'lg'}} variant="simple" color={textColor}>
                        <Thead fontSize={{base:"8pt", sm:"md"}}>
                            <Tr  my=".8rem" pl="0px" color="gray.400" >
                                <Th  color="#b7e4c7" >Seller</Th>
                                <Th  color="#b7e4c7" >Project Name/type</Th>
                                <Th  color="#b7e4c7" >Qty</Th>
                                <Th  color="#b7e4c7" >Price</Th>
                                <Th  color="#b7e4c7" >Total</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tablesTableData.map((row, index, arr) => {
                                return (<>
                                
                                    <TablesTableRow
                                        name={row.id}
                                        logo={row.logo}
                                        email={row.email}
                                        subdomain={row.subdomain}
                                        domain={row.domain}
                                        status={row.status}
                                        date={row.insert_timestamp}
                                        isLast={index === arr.length - 1 ? true : false}
                                        key={index}

                                        index={index}
                                    />
                               </> );
                            })}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Flex>
    );
}

export default Tables;
