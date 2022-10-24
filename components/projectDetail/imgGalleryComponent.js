import React, { useEffect } from "react";

import {motion, MotionConfig} from "framer-motion";
import {
   Container
} from '@chakra-ui/react'

import Img1 from "@public/Images/foresta.jpg"
import Img2 from "@public/Images/foresta2.jpg"
import Img3 from "@public/Images/imageBuy.jpg"
import Img4 from "@public/Images/imageSell.jpg"
import Img5 from "@public/Images/imageCreate.jpg"


const docs= [Img1, Img2, Img3, Img4, Img5]




const ImgGrid = ({setSelectedImg}) => {

    return (<>
        <div  className="img-grid">
            {docs &&
                docs.map((doc) => (
                    <motion.div
                        layout
                        whileHover={{ opacity: 1 }}
                        className="img-wrap"
                        key={doc.id}
                        onClick={() => setSelectedImg(doc.src)}
                    >
                        <motion.img
                            src={doc.src}
                            alt="uploadded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                ))}
        </div>
    </>)

}

export default ImgGrid

