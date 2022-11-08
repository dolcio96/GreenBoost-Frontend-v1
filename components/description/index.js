import React, { useEffect, useState } from "react"
import {
    Flex,
    Image,
    Container,
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
    row1: { title: "TITLE 1", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: co2 },
    row2: { title: "Title2", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: ecology },
    row3: { title: "Title3", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: footprint },
    row4: { title: "Title4", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: forest },
    row5: { title: "Title5", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: greenIndustry },
    row6: { title: "Title6", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: greenIndustry2 },
    row7: { title: "Title7", description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum", img: leave },
}



const ImageRow = (info) => {
    return (<>
        <Box w={{ base: "100%", lg: "50%" }}

            
        >
            <Center>
                <Image
                    src={info.img.src}
                    alt='Image'
                    w="100px"
                    h="100px"
                    objectFit='cover'
                  
                    
                />
            </Center>
        </Box>

    </>);
}

const BoxRow = (info) => {
    return (

        <Box textAlign={"center"} justifyContent={"center"} boxSize={{ base: "100%", lg: "50%" }} mt={{ base: 8, lg: 0 }}>
            <Center textAlign={"center"}><Heading textAlign={"center"} justifyContent={"center"} pb="5" color="#136213">{info.title} </Heading></Center>
            <Text fontSize={"lg"}>{info.description}
            </Text>
        </Box>

    );
}

const RowBoxLeft = (info) => {
    return (
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={6} 
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
        <MotionFlex direction={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={6} 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
            <BoxRow {...info} />
            <ImageRow {...info} />
        </MotionFlex>
    );

}


const Description = () => {

    const [dimension, setDimension] = useState(true);


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
                backgroundColor={"white"
                }
                py={{base:"20px",md:"40px"}}
            >
                <Container maxW={"80%"}>

                    <Flex direction={"column"}>

                        <RowBoxLeft {...rows.row1} />
                        {dimension ? <RowBoxRight {...rows.row2} /> : <RowBoxLeft {...rows.row2} />}
                        <RowBoxLeft {...rows.row3} />
                        {dimension ? <RowBoxRight {...rows.row4} /> : <RowBoxLeft {...rows.row4} />}
                        <RowBoxLeft {...rows.row5} />
                        {dimension ? <RowBoxRight {...rows.row6} /> : <RowBoxLeft {...rows.row6} />}
                        <RowBoxLeft {...rows.row7} />

                    </Flex>
                </Container>
            </Flex>

        </>

    )
}


export default Description
