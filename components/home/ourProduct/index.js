// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
    Heading,
    GridItem,
    VStack,
    useDisclosure,
    Icon,
    Divider
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Img1 from "@public/Images/BECCS.jpg"
import NextImage from 'next/image';
const TextBox = ({ title, description }) => {

    return (<>
        <Box>
            <Heading color={"primary"}>
                {title}
            </Heading>
            <Text>
                {description}
            </Text>
        </Box>

    </>)
}


function OurProduct() {
    let { t } = useTranslation();
    return (
        <>
          <Box>
            <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={20} my={10} mx={20}>
              <GridItem>
                <Center h="full">
                  <Image src={Img1.src} borderRadius={10} />
                </Center>
              </GridItem>
    
              
              {/*<Divider orientation="vertical"  variant="solid" bg="primary" borderColor="primary"  border="1px solid" borderRadius={10}/>*/}
    
              <GridItem>
                <Flex flexDirection={"column"} gap={6}>
                  <TextBox title={"ALTA QUALITA'"} description={"GreenBoost offre Crediti di Carbonio certificati secondo i più elevati standard di mercato"} />
                  <TextBox title={"REALE RIMOZIONE"} description={" La rimozione di carbonio avviene grazie a processi ingegnerizzati, capaci di garantire la reale rimozione di CO₂ dall'atmosfera"} />
                  <TextBox title={" STOCCAGGIO NEL TEMPO"} description={" La CO₂ sequestrata viene trasformata, convertita in una forma più stabile e stoccata o riutilizzata all'interno di altri materiali"} />
                  <TextBox title={"CERTIFICAZIONE"} description={"La certificazione dei Crediti di Carbonio offerti da GreenBoost garantisce uno stoccaggio della CO₂ fino a 100+ anni"} />
                </Flex>
              </GridItem>
            </Grid>
          </Box>
        </>
      );
    }
    
    export default OurProduct;