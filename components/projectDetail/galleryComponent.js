
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

import {
    Image,
    AspectRatio 
  } from "@chakra-ui/react";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

import Img1 from "@public/Images/foresta.jpg"
import Img2 from "@public/Images/foresta2.jpg"
import Img3 from "@public/Images/imageBuy.jpg"
import Img4 from "@public/Images/imageSell.jpg"
import Img5 from "@public/Images/imageCreate.jpg"


const items = [Img1, Img2, Img3, Img4, Img5]

const ProjectGallery = () => {
    //const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const carouselRef = useRef(null);



    return (<>
        <div className="abc">
            <div className="controls-wrapper">
            </div>
            <hr className="seperator" />
            <div className="carousel-wrapper">
                <Carousel
                    //ref={carouselRef}
                    //onNextEnd={({ index }) => { if(index=items.length){ carouselRef.current.goTo(0)}}}
                    breakPoints={breakPoints}
                    enableAutoPlay={true}
                    pagination={false}
                    showArrows={false}
                >
                    {items.map((item) => (
                        <Item key={item.src}> <Image   src={item.src} /></Item>
                    ))}
                </Carousel>
            </div>
        </div>
    </>)

}

export default ProjectGallery

