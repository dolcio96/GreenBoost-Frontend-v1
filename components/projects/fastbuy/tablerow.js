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

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, isLast, index } = props;
  const textColor = useColorModeValue("white");
  const titleColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "navy.900");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const qty = 1 + 9
  const price = 1 + 15

  return (
    <Tr borderBottom={"1pt solid white"} fontSize={{ base: "10px", sm: "md" }}>
      <Td
        border={"none"}
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap" >

          <Flex direction="column">
            <Text color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              Project {index}
            </Text>
            <Text color={textColor} fontWeight="normal">
              Position
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td border={"none"}>
        <Flex direction="column">
          <Text color={textColor} fontWeight="bold">
            {domain}
          </Text>
          <Text color={textColor} fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td>
      <Td border={"none"}>
        <Text color={textColor} fontWeight="bold" pb=".5rem">
          {qty}
        </Text>
      </Td>
      <Td border={"none"}>
        <Text color={textColor} fontWeight="bold" pb=".5rem">
          {price}
        </Text>
      </Td>
      <Td border={"none"}>
        <Text color={textColor} fontWeight="bold" pb=".5rem">
          {price*qty} EUR
        </Text>
      </Td>

    </Tr>
  );
}

export default TablesTableRow;
