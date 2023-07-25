import React from 'react';
import {
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import OrderRecapComponent from "@components/order/orderRecap"
import BackgroundAnimatedComponent from "@components/test/backgroundAnimated"

const project_rows = [
  { "quantity": 3, "project": { "name": "nome1", "price_per_unit": 8.5 } },
  { "quantity": 4, "project": { "name": "nome2", "price_per_unit": 6 } },
  { "quantity": 5, "project": { "name": "nome3", "price_per_unit": 8 } }
];

export default function Projects() {
  return (
    <>
      <Head
        title="GreenBoost: test"
        description="GreenBoost: test"
      />
      <Box position="relative" height="100vh"> {/* Add position: relative and height: 100vh to the container */}
        <BackgroundAnimatedComponent />
        <Center position="absolute" top={0} left={0} right={0} bottom={0}> {/* Use position: absolute and set top, left, right, and bottom to 0 */}
          <Flex direction={"column"} w="50%" gap={"10"}>
            <OrderRecapComponent project_rows={project_rows} />
          </Flex>
        </Center>
      </Box>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
