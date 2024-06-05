import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Center
} from "@chakra-ui/react";

//import Card from "@components/card/Card.js";
//import CardBody from "@components/card/CardBody.js";
//import CardHeader from "@components/card/CardHeader.js";

import TableRowProfileComponent from "@components/table/tablerow/tableRowProfile";
import React from "react";



function Tables({ tablesData }) {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");


  return (
    <Flex direction="column" pt={{ base: "120px", md: "10px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Center>
            <Text fontSize="xl" fontWeight="bold" pl="20px">
              {tablesData.type}
            </Text>
          </Center>
        </CardHeader>
        <Center>
          <CardBody>
            <Table variant="simple" color={textColor}>
              <Thead>
                <Tr my=".8rem" pl="0px" color="gray.400" >
                  {
                    tablesData.header.map((El, index) => {
                      return (
                        <Th key={index} borderColor={borderColor} color="gray.200" >{El}</Th>

                      )
                    })}
                </Tr>
              </Thead>
              <Tbody>
                {
                  Object.keys(tablesData.list).map((key, index) => {
                    //console.log(tablesData.list[key]);
                    return (

                      <TableRowProfileComponent
                        type={tablesData.type}
                        info={tablesData.list[key]}
                        //isLast={index === arr.length - 1 ? true : false}
                        key={index}
                      />
                    );
                  })
                }
              </Tbody>
            </Table>
          </CardBody>
        </Center>
      </Card>
    </Flex>
  );
}

export default Tables;
