// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Center,
  Text,
  useColorMode,
  useColorModeValue,
  Heading,
  color,
} from "@chakra-ui/react";
// public
import avatar6 from "@public/Images/avatars/avatar4.png";

// Custom components
import Card from "@components/card/Card";
import CardBody from "@components/card/CardBody";
import CardHeader from "@components/card/CardHeader";
import React from "react";
import {
  FaPlus,
} from "react-icons/fa";

import ProjectCard from "@components/projects/projectCard"
import dynamic from 'next/dynamic';
import KPINumber from "@lib/KPInumber"



const BuyerRow = ({ buyer }) => {
  return (<>
    <Flex justifyContent='space-between' mb='21px'>
      <Flex align='center'>
        <Avatar
          src={avatar6.src}
          w='50px'
          h='50px'
          borderRadius='15px'
          me='10px'
          backdropBlur={'100%'}
          backgroundColor='transparent'

        />
        <Flex direction='column'>
          <Text fontSize='sm' color={"black"} fontWeight='bold'>
            Company: {buyer.company.company_name}
          </Text>
          <Text fontSize='xs' color='gray.400' fontWeight='400'>
            Quantity:
          </Text>
        </Flex>
      </Flex>
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

function ProfileOverviewSeller({ userInfo }) {
  console.log(userInfo)
  const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
  const chartOptions = {

    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Project 1', 'Project 2', 'Project 3'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },


  };
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column'>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(3, 1fr)" }} gap='22px' >
        <Box p='16px'>
          <Box p='12px 5px' mb='12px'>
            <Heading>
              Stats
            </Heading>
          </Box>
          <Center>
            <Box w="80%">
              <Box border="1px" borderColor="gray.400" bg="tertiary" boxShadow='1px 2px 9px #588157' borderRadius="15px" mb="10px" p="5px" >
                <Text fontWeight={'bold'} fontSize={"xl"}>Total Sales</Text>
                <Flex direction='column' >
                  <KPINumber n={100} dly={200} lbl={"$"} fontSize={"5xl"} />
                  <KPINumber n={100} dly={200} lbl={"CC"} fontSize={"5xl"} />
                </Flex>
              </Box>
              <Box border="1px" borderColor="gray.400" bg="tertiary" boxShadow='1px 2px 9px #588157' borderRadius="15px" p="5px">
                <Text fontWeight={'bold'} fontSize={"xl"}>Remains</Text>
                <Flex direction='column'  >
                  <KPINumber n={100} dly={200} lbl={"All projects"} fontSize={"4xl"} />
                  <KPINumber n={29} dly={1200} lbl={"Project 1 "} fontSize={"3xl"} />
                  <KPINumber n={71} dly={1200} lbl={"Project 2 "} fontSize={"3xl"} />
                </Flex>
              </Box>
            </Box>

          </Center>
        </Box>

        <Box p='16px' my={{ sm: "24px", xl: "0px" }}>

          {/* <Informations /> */}
          <Center >
            <Box w="80%">
              <Text fontWeight={'bold'} fontSize={"xl"}>% Sold</Text>
              <Center>
                <ApexCharts options={chartOptions.options} series={chartOptions.series} type="pie" width={500} />
              </Center>
            </Box>
          </Center>
        </Box>


        <Box p='16px'>
          <Box p='12px 5px' mb='12px'>
            <Heading>
              Interactions
            </Heading>
          </Box>
          <Box px='5px'>
            <Grid templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)", xl: "1fr" }} gap={{ md: '22px', xl: '10px' }} >
              {userInfo.buyers.map((buyer, index) => {
                return (
                  <BuyerRow
                    key={index}
                    buyer={buyer} />

                )
              })}
            </Grid>
          </Box>
        </Box>
      </Grid>


      <Card p='16px'>
        <CardHeader p='12px 5px' mb='12px'>
          <Flex direction='column'>
            <Heading color={textColor} fontWeight='bold'>
              Projects
            </Heading>
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

            {userInfo.projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  project={project} />

              )
            })}

            <Button
              color={textColor}
              as={"a"}
              href={"/createproject"}
              p='0px'
              bg='transparent'
              border='1px solid lightgray'
              borderRadius='15px'
              minHeight={{ sm: "200px", md: "100%" }}
              _hover={{
                bg: "secondary",
                textColor: "tertiary"
              }}>
              <Flex direction='column' justifyContent='center' align='center'>
                <Icon as={FaPlus} fontSize='lg' mb='12px' />
                <Text fontSize='lg' fontWeight='bold'>
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

export default ProfileOverviewSeller;
