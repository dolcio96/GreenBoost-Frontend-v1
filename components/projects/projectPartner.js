import React, { useEffect, useRef, useState } from "react";
import { Center, Heading, Box, Flex } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { motion, useAnimation } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectPartner = ({ partnerImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);


  const calculateVisibleSlides = () => {
    // const screenWidth = window.innerWidth;
    const minVisibleSlides = 1; // Set a minimum number of visible slides
    const maxVisibleSlides = Math.min(partnerImages.length, 3); // Set a maximum number of visible slides

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
    <Center>

      <Box width="80%">
        <Center>
          <Heading mb={6}>I Nostri Partner</Heading>
        </Center>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={80}
          interval={3000}
          totalSlides={partnerImages.length}
          visibleSlides={visibleSlides}
          isPlaying
        >
          <Slider ref={containerRef} >
            {partnerImages.map((image, index) => (
              <Slide key={index} index={index}>
                <Flex
                  align="center"
                  justify="center"
                  h="100%"
                  w="80%"
                  mx="auto"
                >
                  <img
                    src={image.src}
                    alt={`Partner ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "scale-down", //objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </Flex>
              </Slide>
            ))}
          </Slider>
          {/* <ButtonBack>{<MdChevronLeft size={30} color="#fff" />}</ButtonBack>
          <ButtonNext>{<MdChevronRight size={30} color="#fff" />}</ButtonNext> */}
        </CarouselProvider>
      </Box>
    </Center>
  );
};

export default ProjectPartner;
