import React, { useEffect, useRef, useState } from "react";
import { Center, Heading, Box, Flex, Link } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { motion, useAnimation } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import logoPuro from "@public/Images/partner/logo_Puro.png"
import logoCSMT from "@public/Images/partner/logo_CSMT.png"
import logoGMAmbiente from "@public/Images/partner/logo_GM_Ambiente.png"
import logoNet0 from "@public/Images/partner/logo_net0.png"
import logoBiocarbon from "@public/Images/partner/logo_Biocarbon_1.png"
import logoNovocarbo from "@public/Images/partner/logo_Novocarbo.png"
import logoExomad from "@public/Images/partner/logo_Exomad_3.png"

const ProjectPartner = () => {

    const partnerLogos = [
        { img: logoPuro, link: "https://puro.earth/" },
        { img: logoCSMT, link: "https://www.csmt.it/it/innovative-contamination-hub" },
        { img: logoGMAmbiente, link: "https://www.gmambiente.eu/" },
        { img: logoNet0, link: "https://www.goingnetzero.it" },
        { img: logoBiocarbon, link: "https://www.bcbiocarbon.com/" },
        { img: logoNovocarbo, link: "https://www.novocarbo.com/ " },
        { img: logoExomad, link: "https://www.exomadgreen.com/" }]

    const [currentIndex, setCurrentIndex] = useState(0);
    const controls = useAnimation();
    const containerRef = useRef(null);


    const calculateVisibleSlides = () => {
        // const screenWidth = window.innerWidth;
        const minVisibleSlides = 1; // Set a minimum number of visible slides
        const maxVisibleSlides = Math.min(partnerLogos.length, 3); // Set a maximum number of visible slides

        // Adjust the number of visible slides based on screen width
        /*   if (screenWidth < 600) {
            return Math.min(minVisibleSlides, maxVisibleSlides);
          } else if (screenWidth < 900) {
            return Math.min(2, maxVisibleSlides);
          } else {
            return maxVisibleSlides;
          }
       */
        return maxVisibleSlides;
    };


    const visibleSlides = calculateVisibleSlides();


    return (
            <Box width="100%">
                <Center>
                    <Heading mb={6} color="primary" fontSize={{ base: "3xl", md: "4xl" }}>I Nostri Partner</Heading>
                </Center>
                <CarouselProvider
                    naturalSlideWidth={200}
                    naturalSlideHeight={80}
                    interval={3000}
                    totalSlides={partnerLogos.length}
                    visibleSlides={visibleSlides}
                    isPlaying
                >
                    <Slider ref={containerRef} >
                        {partnerLogos.map((image, index) => (
                            <Slide key={index} index={index}>
                                <Link href={image.link} isExternal>
                                    <Flex
                                        align="center"
                                        justify="center"
                                        h="100%"
                                        w="80%"
                                        mx="auto"
                                    >
                                        <img
                                            src={image.img.src}
                                            alt={`Partner ${index + 1}`}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "scale-down", //objectFit: "cover",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Flex>
                                </Link>
                            </Slide>
                        ))}
                    </Slider>
                    {/* <ButtonBack>{<MdChevronLeft size={30} color="#fff" />}</ButtonBack>
          <ButtonNext>{<MdChevronRight size={30} color="#fff" />}</ButtonNext> */}
                </CarouselProvider>
            </Box>
    );
};

export default ProjectPartner;
