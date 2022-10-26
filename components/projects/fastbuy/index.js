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
  Textarea,
  Center,
} from '@chakra-ui/react';



const FastBuy = () => {


  return (
    <>
      <Container bg="#b7e4c7" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>

          <Box
            bg="#40916c"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box mb={{sm:"10px",md:"40px"}}>
              <Center>
                <Heading>Fast Buy</Heading>
              </Center>
            </Box>



            <Flex direction={{ sm: "column", md: "row" }} justifyContent="space-between">
              <Box w={{ sm: "100%", md: "40%" }}>
                <Text textAlign="justify"

                  fontSize='lg' mt={{ sm: 3, md: 0 }} color="bg=#b7e4c7">
                  In questa sezione potrai acquistare Carbon Credit casuali selezionando solo la quantità
                </Text>
              </Box>


              <Box bg="#b7e4c7" borderRadius="lg" w={{ sm: "100%", md: "40%" }}>
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="quantity">
                      <FormLabel>How many Carbon Credit do you want?</FormLabel>
                      <InputGroup borderColor="#40916c">
                        <InputLeftElement
                          pointerEvents="none"

                        />
                        <Input type="quantity" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        bg="#40916c"
                        color="#b7e4c7"
                        _hover={{}}>
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>

            </Flex>

          </Box>
        </Flex>
      </Container>
    </>)

}

export default FastBuy
