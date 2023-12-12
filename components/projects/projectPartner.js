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
    <Center flexDirection="column">
      <Heading mb={6}>I Nostri Partner</Heading>
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={100}
        totalSlides={partnerImages.length}
        visibleSlides={4}
        infinite
        isPlaying
      >
        <Slider ref={containerRef}>
          {partnerImages.map((image, index) => (
            <Slide key={index} index={index}>

                <img
                  src={image.src}
                  alt={`Partner ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              
            </Slide>
          ))}
        </Slider>
        <ButtonBack>{<MdChevronLeft size={30} color="#fff" />}</ButtonBack>
        <ButtonNext>{<MdChevronRight size={30} color="#fff" />}</ButtonNext>
      </CarouselProvider>
    </Center>
  );
};

export default ProjectPartner;
