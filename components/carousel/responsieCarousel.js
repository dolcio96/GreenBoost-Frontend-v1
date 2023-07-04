
//carousels/Responsive.js
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import styles from "../styles/Responsive.module.css";
import {
    Box,
    Img,
} from '@chakra-ui/react'
import Img2 from "@public/Images/foresta3.jpg"

const items = {
    "items": {
        "responsive": [
            {
                "id": 1,
                "title": "Swiper Carousel Example",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1597364662/kizmelvin/ussama-azam-hlg-ltdCoI0-unsplash_ttfjib.jpg"
            },
            {
                "id": 2,
                "title": "Swiper Carousel Example",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645530199/kizmelvin/Carousel%20assets/slim-emcee-jzdOX0XkXr8-unsplash_zocsdq.jpg"
            },
            {
                "id": 3,
                "title": "Swiper Carousel Example",
                "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quos mollitia sed quod consectetur at quam dolore praesentium neque eos assumenda iusto nam laborum laboriosam odio blanditiis possimus accusantium recusandae porro exercitationem itaque",
                "imageUrl": "https://res.cloudinary.com/kizmelvin/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1645534321/kizmelvin/Carousel%20assets/luwadlin-bosman-J1oObe7WWjk-unsplash_f56oh3.jpg"
            }
        ]
    }
}


export default function ResponsiveCarousel() {
    const { responsive } = items.items;
    return (
        <Box >
            <Carousel
  
                infiniteLoop={true}
                
            >
                {responsive.map((item) => (
                    <Box key={item.id} >
                        <Box >
                        <Img src={Img2.src} display={"grid"} minW={"100%"} minH={"100%"}
                                    maxW={"100%"} position={"absolut"} top={"0"} left={"0"} objectFit="cover" borderRadius={5} />
                       
                        </Box>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
}