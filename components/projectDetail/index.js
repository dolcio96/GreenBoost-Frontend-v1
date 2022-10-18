import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Center,
    GridItem,
    Flex
} from '@chakra-ui/react';

import ProjectDetailHeaderComponent from "./headerComponent"
import ProjectDetailGalleryComponent from "./galleryComponent"
import ProjectDetailsComponent from "./projectDetails"


const ProjectDetail = () => {

    return (<>

            <ProjectDetailHeaderComponent />
            <ProjectDetailGalleryComponent />
            <ProjectDetailsComponent />

    </>)

}

export default ProjectDetail

