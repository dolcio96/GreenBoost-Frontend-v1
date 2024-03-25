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

import Pc from "@public/Images/pc.png"
import NextImage from 'next/image';
const TextBox = ({ title, description }) => {

    return (<>
        <Box>
            <Heading color={"primary"} fontSize={{base:"xl", xl:"2xl"}} pt="20px">
                {title}
            </Heading>
            <Text fontSize={{base:"sm", xl:"md"}}>
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
            <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={20} my={10} mx={{base: 5, lg: 20 }}>
              <GridItem>
                <Center h="full">
                  <Image src={Pc.src} borderRadius={10} />
                </Center>
              </GridItem>
    
              
              {/*<Divider orientation="vertical"  variant="solid" bg="primary" borderColor="primary"  border="1px solid" borderRadius={10}/>*/}
    
              <GridItem>
                <Center flexDirection={"column"} gap={6} h={"full"}>
                  <Box gap={6}>
                  <TextBox title={t('home.our_product.high_quality.title')} description={t('home.our_product.high_quality.description')} />
                  <TextBox title={t('home.our_product.remove.title')} description={t('home.our_product.remove.description')} />
                  <TextBox title={t('home.our_product.durability.title')} description={t('home.our_product.durability.description')} />
                  <TextBox title={t('home.our_product.certification.title')} description={t('home.our_product.certification.description')} />
                  </Box>
                </Center>
              </GridItem>
            </Grid>
          </Box>
        </>
      );
    }
    
    export default OurProduct;