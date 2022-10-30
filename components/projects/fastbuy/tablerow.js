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
    const { logo, name, email, subdomain, domain, status, date, isLast } = props;
    const textColor = useColorModeValue("white");
    const titleColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "navy.900");
    const borderColor = useColorModeValue("gray.200", "gray.600");
  
    return (
      <Tr borderBottom={"1pt solid white"} fontSize={{base:"10px",sm:"md"}}>
        <Td
          border={"none"}
        >
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap" >
         
            <Flex direction="column">
              <Text color={textColor} 
                fontWeight="bold"
                minWidth="100%"
              >
                {name}abc abc
              </Text>
              <Text  color={textColor}  fontWeight="normal">
                Position
              </Text>
            </Flex>
          </Flex>
        </Td>
        <Td border={"none"}>
          <Flex direction="column">
            <Text  color={textColor}   fontWeight="bold">
              {domain}
            </Text>
            <Text color={textColor}  fontWeight="normal">
              {subdomain}
            </Text>
          </Flex>
        </Td>
        <Td border={"none"}>
          <Text  color={textColor}  fontWeight="bold" pb=".5rem">
            123
          </Text>
        </Td>
        <Td border={"none"}>
          <Text color={textColor}   fontWeight="bold" pb=".5rem">
            123
          </Text>
        </Td>
        <Td border={"none"}>
          <Text   color={textColor}  fontWeight="bold" pb=".5rem">
            123
          </Text>
        </Td>
        
      </Tr>
    );
  }
  
  export default TablesTableRow;
  