import React, { useState } from "react";
import Modal from "./modal"

import {
    Box,
    Text,
    SimpleGrid,
    Center,
    GridItem,
    Flex
} from '@chakra-ui/react';

import ProjectDetailHeaderComponent from "./headerComponent"
import ProjectDetailGalleryComponent from "./imgGalleryComponent"
import ProjectDetailsComponent from "./projectDetails";
//import ProjectDetailsComponent from "./projectDetailsOLD"


const ProjectDetail = (props) => {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <Box
                ml="50px" mr="50px">
                <ProjectDetailHeaderComponent {...props} />
                <ProjectDetailGalleryComponent setSelectedImg={setSelectedImg} />
                {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
                <ProjectDetailsComponent {...props} />
            </Box>
        </>
    )

}

export default ProjectDetail

