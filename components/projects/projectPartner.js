import React, { useEffect, useRef, useState } from "react";
import { Center, Heading, Box } from "@chakra-ui/react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { motion, useAnimation } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProjectPartner = ({ partnerImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);



  return (
    <Center>

      <Box width="80%">
        <Center>
          <Heading mb={6}>I Nostri Partner</Heading>
        </Center>
        <CarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={100}
          interval={3000}
          totalSlides={partnerImages.length}
          visibleSlides={3}
          isPlaying
        >
          <Slider ref={containerRef}>
            {partnerImages.map((image, index) => (
              <Slide key={index} index={index}>

                <img
                  src={image.src}
                  alt={`Partner ${index + 1}`}
                  style={{
                    width: "98%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

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
