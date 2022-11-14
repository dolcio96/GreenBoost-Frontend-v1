import React, { useEffect, useState } from "react"
import {
    StackDivider,
    Stack,
    Flex,
    Image,
    Container,
    Highlight,
    Center,
    Heading,
    Text,
    Box,

} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"


import co2 from "@public/Images/icons/co2.svg"
import ecology from "@public/Images/icons/ecology.svg"
import footprint from "@public/Images/icons/footprint.svg"
import forest from "@public/Images/icons/forest.svg"
import greenIndustry from "@public/Images/icons/greenIndustry.svg"
import greenIndustry2 from "@public/Images/icons/greenIndustry2.svg"
import leave from "@public/Images/icons/leave.svg"


const MotionFlex = motion(Flex)
const rows = {
    row1: { title: "Easy and free access", description: "Access to the marketplace and offset your emissions in 3 easy click. We want to make our Marketplace accessible to everyone, in a very easy and autonomously way, with the will to make voluntary market grow as much as possible.", img: co2 },
    row2: { title: "Carbon Credit supply gatherer", description: "We don’t choose you, you choose us! List your porjects on GreenBoost and become a member of our ecosystem. This will bring to the creation of a market with the greatest selection ever, where you can find every kind of VCC from all over the world.", img: forest },
    row3: { title: "Build our zero Co2 future", description: "And that’s not all! GreenBoost wants to reinvest constantly in the development of new green projects, every year, to reduce Co2 emissions as much as we can. Our community will join us in this adventure, taking part in the choice of future projects and building our new ecosystem, together.", img: footprint },
}



const ImageRow = (info) => {
    return (<>
        <Center w={{ base: "100%", lg: "50%" }}>
            <Box >
                    <Image
                        src={info.img.src}
                        alt='Image'
                        w="100px"
                        h="100px"
                        objectFit='cover'


                    />
            </Box>
        </Center>

    </>);
}

const BoxRow = (info) => {
    return (

        <Box textAlign={"center"} justifyContent={"center"} boxSize={{ base: "100%", lg: "40%" }} mt={{ base: 8, lg: 0 }}>
            <Center textAlign={"center"}><Heading textAlign={"center"} justifyContent={"center"} pb="5" color="#136213">{info.title} </Heading></Center>
            <Text fontSize={"lg"}>{info.description}
            </Text>
        </Box>

    );
}

const RowBoxLeft = (info) => {
    return (
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-around"} my={6}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <ImageRow {...info} />
            <BoxRow {...info} />
        </MotionFlex>
    );

}

const RowBoxRight = (info) => {
    return (
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-around"} my={6}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <BoxRow {...info} />
            <ImageRow {...info} />
        </MotionFlex>
    );

}


const Description = () => {

    const [dimension, setDimension] = useState(true);
    const MotionHeading = motion(Heading)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 992) {

                setDimension(false)
            }
            else {
                setDimension(true)

            }

        }

        window.addEventListener('resize', handleResize);
        handleResize();
    })

    return (
        <>
            <Flex direction={"column"}
                backgroundColor={"white"}
                mx='16px'
            >
                <Stack divider={<StackDivider borderColor="gray.200" />}>
                    <RowBoxLeft {...rows.row1} />
                    {dimension ? <RowBoxRight {...rows.row2} /> : <RowBoxLeft {...rows.row2} />}
                    <RowBoxLeft {...rows.row3} />
                </Stack>
            </Flex>

        </>

    )
}


export default Description
