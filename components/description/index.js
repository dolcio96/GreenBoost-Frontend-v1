import React from "react"
import {
    Flex,
    SimpleGrid,
    Container,
    Center,
    Heading,
    Text
} from '@chakra-ui/react';




const Description = () => {

    return (
        <>

            <Flex direction={"column"}
                backgroundColor={"green.200"
                }
                py="20px"
            >
                <Container maxW={"100ch"}>

                    <Flex direction={"column"}>
                        <Center><Heading>Descrizione</Heading></Center>
                        <Text>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        </Text>
                    </Flex>
                </Container>
            </Flex>

        </>

    )
}

export default Description
