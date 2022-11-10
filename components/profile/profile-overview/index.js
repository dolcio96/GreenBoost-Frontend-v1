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
import Card from "@components/card/card";
import CardBody from "@components/card/cardBody";
import CardHeader from "@components/card/cardHeader";
import React from "react";
import {
  FaPlus,
} from "react-icons/fa";

function ProfileOverview() {
  const { colorMode } = useColorMode();

  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");
  const iconColor = useColorModeValue("blue.500", "white");

  return (
    <Flex direction='column'>
      <Grid templateColumns={{ sm: "1fr", xl: "repeat(2, 1fr)" }} gap='22px'>

        <Card p='16px' my={{ sm: "24px", xl: "0px" }} bg="gray.50">
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            {/* */}
            <Flex direction='column'>
              <Text fontSize='md' color='gray.400' fontWeight='400' mb='30px'>
                Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum. Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.
                Lorem Ipsum.Lorem Ipsum. Lorem Ipsum.Lorem Ipsum. Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.Lorem Ipsum.
              </Text>
              <Flex align='center' mb='18px'>
                <Text
                  fontSize='md'
                  color={textColor}
                  fontWeight='bold'
                  me='10px'>
                  Full Name:{" "}
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400'>
                  Ludovico Dolcini
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
                  ludovico.dolcini@gmail.com
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

          </CardBody>
        </Card>
        <Card p='16px' bg="gray.50">
          <CardHeader p='12px 5px' mb='12px'>
            <Text fontSize='lg' color={textColor} fontWeight='bold'>
              Buyers
            </Text>
          </CardHeader>
          <CardBody px='5px'>
            <Flex direction='column' w='100%'>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar2}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Hi! I need more information...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    VISIT
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar3}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Awesome work, can you change...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    VISIT
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar4}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      Have a great afternoon...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    VISIT
                  </Text>
                </Button>
              </Flex>
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
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    VISIT
                  </Text>
                </Button>
              </Flex>
              <Flex justifyContent='space-between' mb='21px'>
                <Flex align='center'>
                  <Avatar
                    src={avatar6}
                    w='50px'
                    h='50px'
                    borderRadius='15px'
                    me='10px'
                  />
                  <Flex direction='column'>
                    <Text fontSize='sm' color={textColor} fontWeight='bold'>
                      Sophie B.{" "}
                    </Text>
                    <Text fontSize='xs' color='gray.400' fontWeight='400'>
                      About files I can...
                    </Text>
                  </Flex>
                </Flex>
                <Button p='0px' bg='transparent' variant='no-effects'>
                  <Text
                    fontSize='10px'
                    fontWeight='700'
                    color={iconColor}
                    alignSelf='center'>
                    VISIT
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
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
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect1.src} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #1
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  West America
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Some text...
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect2.src} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #2
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Russia
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Some text...
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
            <Flex direction='column'>
              <Box mb='20px' position='relative' borderRadius='15px'>
                <Image src={ImageArchitect3.src} borderRadius='15px' />
                <Box
                  w='100%'
                  h='100%'
                  position='absolute'
                  top='0'
                  borderRadius='15px'
                  bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
              </Box>
              <Flex direction='column'>
                <Text fontSize='md' color='gray.400' fontWeight='600' mb='10px'>
                  Project #3
                </Text>
                <Text
                  fontSize='xl'
                  color={textColor}
                  fontWeight='bold'
                  mb='10px'>
                  Italy
                </Text>
                <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px'>
                  Some text...
                </Text>
                <Flex justifyContent='space-between'>
                  <Button variant='dark' minW='110px' h='36px'>
                    VIEW ALL
                  </Button>
                  <AvatarGroup size='xs'>
                    <Avatar name='Ryan Florence' src={avatar6} />
                    <Avatar name='Segun Adebayo' src={avatar2} />
                    <Avatar name='Kent Dodds' src={avatar3} />
                    <Avatar name='Prosper Otemuyiwa' src={avatar4} />
                  </AvatarGroup>
                </Flex>
              </Flex>
            </Flex>
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
