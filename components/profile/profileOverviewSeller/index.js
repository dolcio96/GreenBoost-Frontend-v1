// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
// public
import avatar2 from "@public/Images/avatars/avatar2.png";
import avatar3 from "@public/Images/avatars/avatar3.png";
import avatar4 from "@public/Images/avatars/avatar4.png";
import avatar5 from "@public/Images/avatars/avatar5.png";
import avatar6 from "@public/Images/avatars/avatar6.png";
import ImageArchitect1 from "@public/Images/bamboo.jpg";
import ImageArchitect2 from "@public/Images/foresta.jpg";
import ImageArchitect3 from "@public/Images/foresta.jpg";
// Custom components
import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";
import React from "react";
import {
  FaPlus,
} from "react-icons/fa";

import ProjectCard from "@components/projects/projectCard"


const BuyerRow = () => {
  return (<>
    <Flex justifyContent='space-between' mb='21px'>
      <Flex align='center'>
        <Avatar
          src={avatar5}
          w='50px'
          h='50px'
          borderRadius='15px'
          me='10px'
        />
        <Flex direction='column'>
          <Text fontSize='sm' color={"black"} fontWeight='bold'>
            Company{" "}
          </Text>
          <Text fontSize='xs' color='gray.400' fontWeight='400'>
            Quantity
          </Text>
        </Flex>
      </Flex>
      <Button p='0px' bg='transparent' variant='no-effects'>
        <Text
          fontSize='10px'
          fontWeight='700'
          alignSelf='center'>
          VISIT
        </Text>
      </Button>
    </Flex>
  </>)
}

const Informations = () => {
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");
  return (<>

    <Box px='5px'>
      <Flex direction='column'>
        <Flex align='center' mb='18px'>
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            me='10px'>
            Full Name:{" "}
          </Text>
          <Text fontSize='md' color='gray.400' fontWeight='400'>
            mycompany
          </Text>
        </Flex>
        <Flex align='center' mb='18px'>
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            me='10px'>
            Mobile:{" "}
          </Text>
          <Text fontSize='md' color='gray.400' fontWeight='400'>
            (44) 123 1234 123
          </Text>
        </Flex>
        <Flex align='center' mb='18px'>
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            me='10px'>
            Email:{" "}
          </Text>
          <Text fontSize='md' color='gray.400' fontWeight='400'>
            username@mycompany.com
          </Text>
        </Flex>
        <Flex align='center' mb='18px'>
          <Text
            fontSize='md'
            color={textColor}
            fontWeight='bold'
            me='10px'>
            Location:{" "}
          </Text>
          <Text fontSize='md' color='gray.400' fontWeight='400'>
            United States
          </Text>
        </Flex>
        <Flex align='center' mb='18px'>

        </Flex>
      </Flex>

    </Box>
  </>)
}

function ProfileOverview() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");

  return (
    <Flex direction='column'>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px' bg="gray.200">
        <Box p='16px' my={{ sm: "24px", xl: "0px" }}>
          <Box p='12px 5px' mb='12px'>
            <Heading>
              Profile Information
            </Heading>
          </Box>
          <Informations />
        </Box>


        <Box p='16px'>
          <Box p='12px 5px' mb='12px'>
            <Heading>
              Buyers
            </Heading>
          </Box>
          <Box px='5px'>
            <Flex direction='column' w='100%'>
              <BuyerRow />
              <BuyerRow />
              <BuyerRow />
              <BuyerRow />
              <BuyerRow />
            </Flex>
          </Box>
        </Box>
      </Grid>

      <Card p='16px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Projects
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='400'>
              My Projects
            </Text>
          </Flex>
        </CardHeader>
        <CardBody px='5px'>
          <Grid
            templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
            gap='24px'>

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <Button
              as={"a"}
              href={"/createproject"}
              p='0px'
              bg='transparent'
              border='1px solid lightgray'
              borderRadius='15px'
              minHeight={{ sm: "200px", md: "100%" }}>
              <Flex direction='column' justifyContent='center' align='center'>
                <Icon as={FaPlus} color={textColor} fontSize='lg' mb='12px' />
                <Text fontSize='lg' color={textColor} fontWeight='bold'>
                  Create a New Project
                </Text>
              </Flex>
            </Button>

          </Grid>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default ProfileOverview;
