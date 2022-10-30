import {
    Flex,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue
} from "@chakra-ui/react";

import Card from "@components/card/card.js";
import CardBody from "@components/card/cardBody.js";
import CardHeader from "@components/card/cardHeader.js";
import TablesProjectRow from "@components/table/tablerow/tablesProjectRow";
import TablesTableRow from "@components/table/tablerow/tablesTableRow";
import React from "react";
import { tablesProjectData, tablesTableData } from "@variables/general";


function Tables() {
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "gray.600");


    return (
        <Flex direction="column" pt={{ base: "120px", md: "10px" }}>
            <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
                <CardHeader p="6px 0px 22px 0px">
                    <Text fontSize="xl" color={textColor} fontWeight="bold" pl="20px">
                        Authors Table
                    </Text>
                </CardHeader>
                <CardBody>
                    <Table variant="simple" color={textColor}>
                        <Thead>
                            <Tr my=".8rem" pl="0px" color="gray.400" >
                                <Th pl="20px" borderColor={borderColor} color="gray.400" >Seller</Th>
                                <Th borderColor={borderColor} color="gray.400" >Project Type</Th>
                                <Th borderColor={borderColor} color="gray.400" >Status</Th>
                                <Th borderColor={borderColor} color="gray.400" >Deployed</Th>
                                <Th borderColor={borderColor}></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {tablesTableData.map((row, index, arr) => {
                                return (
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
                                    />
                                );
                            })}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
            {/* 
        <Card
          my="22px"
          overflowX={{ sm: "scroll", xl: "hidden" }}
          pb="0px"
        >
          <CardHeader p="6px 0px 22px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem" pl="20px">
                Projects Table
              </Text>
            </Flex>
          </CardHeader>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px">
                  <Th pl="20px" color="gray.400" borderColor={borderColor}>
                    Companies
                  </Th>
                  <Th color="gray.400" borderColor={borderColor}>Budget</Th>
                  <Th color="gray.400" borderColor={borderColor}>Status</Th>
                  <Th color="gray.400" borderColor={borderColor}>Completion</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tablesProjectData.map((row, index, arr) => {
                  return (
                    <TablesProjectRow
                      name={row.name}
                      logo={row.logo}
                      status={row.status}
                      budget={row.budget}
                      progression={row.progression}
                      isLast={index === arr.length - 1 ? true : false}
                      key={index}
                    />
                  );
                })}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
        */}
        </Flex>
    );
}

export default Tables;
