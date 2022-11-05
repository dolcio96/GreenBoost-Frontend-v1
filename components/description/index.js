import React, { useEffect,useState } from "react"
import {
    Flex,
    Image,
    Container,
    Center,
    Heading,
    Text,
    Box,
    Lorem
} from '@chakra-ui/react';

import img1 from "@public/Images/imageBuy.jpg"
import img2 from "@public/Images/imageCreate.jpg"
import img3 from "@public/Images/imageSell.jpg"

const rows = {
    row1: { title: "Title1", description: "description1", img: img1 },
    row2: { title: "Title2", description: "description2", img: img2 },
    row3: { title: "Title3", description: "description3", img: img3 }
}



const ImageRow = (info) => {
    return (
        <Image
            src={info.img.src}
            alt='Image'
            w={{ base: "100%", lg: "50%" }}
            h="400px"
            objectFit='cover'
            borderRadius={20}
            boxShadow='xl'
        />);
}

const BoxRow = (info) => {
    return (

        <Box textAlign={"center"} justifyContent={"center"} boxSize={{ base: "100%", lg: "50%" }} mt={{base:8, lg:0}}>
            <Center textAlign={"center"}><Heading textAlign={"center"} justifyContent={"center"} pb="5">{info.title}</Heading></Center>
            <Text fontSize={"lg"}>{info.description}
            </Text>
        </Box>

    );
}

const RowBoxLeft = (info) => {
    return (
        <Flex direction={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={6}>
            <ImageRow {...info} />
            <BoxRow {...info} />
        </Flex>
    );

}

const RowBoxRight = (info) => {
    return (
        <Flex direction={{ base: "column", lg: "row" }} justifyContent={"space-between"} my={6}>
            <BoxRow {...info} />
            <ImageRow {...info} />
        </Flex>
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
                backgroundColor={"gray.200"
                }
                py="20px"
            >
                <Container maxW={"80%"}>

                    <Flex direction={"column"}>

                        <RowBoxLeft {...rows.row1} />
                        {dimension ? <RowBoxRight {...rows.row2} /> :  <RowBoxLeft {...rows.row2} />}
                        <RowBoxLeft {...rows.row3} />

                    </Flex>
                </Container>
            </Flex>

        </>

    )
}


export default Description
