import React, { useEffect } from "react";

import {
    Box,
    Text,
    SimpleGrid,
    Center,
    GridItem,
    Flex
} from '@chakra-ui/react';

import ProjectDetailHeaderComponent from "./headerComponentOLD"
import ProjectDetailGalleryComponent from "./galleryComponent"
import ProjectDetailsComponent from "./projectDetails"


const ProjectDetail = (props) => {

    return (
        <>
            <Box
                ml="50px" mr="50px">
                <ProjectDetailHeaderComponent {...props} />
                <ProjectDetailGalleryComponent />
                <ProjectDetailsComponent />
            </Box>
        </>
    )

}

export default ProjectDetail

