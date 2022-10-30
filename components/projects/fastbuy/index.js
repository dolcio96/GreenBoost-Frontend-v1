import { useState } from "react"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Center,
} from '@chakra-ui/react';

import Co2Icon from '@mui/icons-material/Co2';

import Table from '@components/projects/fastbuy/table.js'

const FastBuy = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  function toggle() {

    if(showProjects===true)
    { setShowProjects(false);}
    else{
      setShowSpinner(!showSpinner);
      setTimeout(() => {
        setShowProjects(!showProjects);
        setShowSpinner(false);
      }, "3000")
    }
  }
  return (
    <>
      <Container bg="#b7e4c7" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex w={{ sm: "80%", md: "80%" }}>

          <Box
            bg="#40916c"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box mb={{ sm: "10px", lg: "40px" }}>
              <Center>
                <Heading>Fast Buy</Heading>
              </Center>
            </Box>



            <Flex p={{base:"10px",}}direction={{ base:"column", sm: "column", lg: "row" }} justifyContent="space-between">
              <Box w={{ sm: "100%", lg: "40%" }}>
                <Text textAlign="justify"

                  fontSize='lg' mt={{ sm: 3, md: 0 }} color="bg=#b7e4c7">
                  In questa sezione potrai acquistare Carbon Credit casuali selezionando solo la quantità. Una volta scelta la quantità verrà fornita una lista dei carbon credit che andrai a comprare.
                  Diventa Carbon Neutral!
                </Text>
              </Box>


              <Box bg="#b7e4c7" borderRadius="lg" w={{ sm: "100%", lg: "40%" }}>
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="quantity">
                      <FormLabel>How many Carbon Credit do you want?</FormLabel>
                      <InputGroup borderColor="#40916c" _focus={{ borderColor: "#40916c" }}  >
                        <InputLeftElement
                          pointerEvents="none"
                          children={<Co2Icon color="gray.800" />}
                        />

                        <Input type="quantity" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        onClick={toggle}
                        variant="solid"
                        bg="#40916c"
                        color="#b7e4c7"
                        _hover={{}}>
                        buy
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>

            </Flex>
            <Flex direction={{ sm: "column", lg: "row" }} justifyContent="center">
              <Box style={{
                display: showSpinner ? "block" : "none"
              }}>
                <Center>
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor="#b7e4c7"
                    color="#0B0E3F"
                    size='xl' />
                </Center>
              </Box>
              <Box style={{
                display: showProjects ? "block" : "none"
              }}>
                <Table >

                </Table>
              </Box>

            </Flex>




          </Box>
        </Flex>
      </Container>
    </>)

}

export default FastBuy
