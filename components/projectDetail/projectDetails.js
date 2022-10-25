import React, { useEffect,useState } from "react";
import {
    Text,
    Flex,
    Button,
    Icon,
    Box,
    VStack,
    Stack,
    Divider
} from '@chakra-ui/react'
import RecommendIcon from '@mui/icons-material/Recommend';
import ForestIcon from '@mui/icons-material/Forest';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import ProjectDetailHeaderComponent from "./headerComponent"
import ProjectDetailGalleryComponent from "./galleryComponentOLD"
import ProjectDetailGalleryComponent2 from "./imgGalleryComponent"
import Modal from "./modal"


const ProjectDetails = () => {

    const [selectedImg, setSelectedImg] = useState(null);

    return (<>
        <Box
            ml="50px" mr="50px">
            <ProjectDetailHeaderComponent />
            <ProjectDetailGalleryComponent2 setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            <Flex direction='column' >
                <Flex
                    direction={{ sm: "column", md: "row" }}
                    justifyContent={{ sm: "center", md: "space-between" }}
                    align='center'
                    boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                    p="5px"
                    mt="10px"
                    mb="10px"
                    borderRadius={5}
                >
                    <Flex
                        w={{ sm: "100%", md: "65%", lg: "75%" }}
                        direction="column"
                        m="5px"
                        p="5px"
                        justifyContent={{ sm: "center", md: "space-around" }}
                        textAlign={{ sm: "center", md: "start" }}
                    >

                        <Flex direction="row"
                            justifyContent="space-between"
                        >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <Text fontSize={{ sm: "lg", lg: "xl" }}
                                    fontWeight='bold'>Project Manager</Text>
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                <RecommendIcon style={{ color: 'green' }} /> Certified By: Verra
                            </Flex>
                        </Flex>
                        <Divider borderColor='green' orientation='horizontal' />
                        <Flex fontSize={{ sm: "lg", lg: "xl" }}
                            direction="row"
                            justifyContent="space-between" >
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Quantity Available:
                            </Flex>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                10.000 - ton Co2
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                The FSCECP hydroelectric complex, located in the Parana region of Brazil, generates renewable energy by harnessing the power of the Jordão River.
                            </Flex>
                        </Flex>
                        <Flex
                            direction={{ sm: "column", md: "row" }}
                            justifyContent={{ sm: "center", md: "space-between" }}>
                            <Flex direction='row' maxWidth='100%' my={{ sm: "14px" }}>
                                Features and SDG:
                            </Flex>
                        </Flex>
                        <Flex direction={{ sm: "column", md: "row" }} justifyContent={{ sm: "center", md: "space-between" }}>
                            <Text><ForestIcon style={{ color: 'green' }} /><EmojiNatureIcon style={{ color: 'green' }} /></Text>
                            <Text>More Info</Text>
                            <Text>Links</Text>
                        </Flex>

                    </Flex>

                    <Flex
                        w={{ sm: "100%", md: "35%", lg: "25%" }}
                        minH="180px"
                        direction="column"
                        m="5px"
                        p="5px"
                        justifyContent={{ sm: "center", md: "space-around" }}
                        textAlign={{ sm: "center", md: "start" }}
                        boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.3)'
                        backgroundColor="#EFEFEF"
                        borderRadius={5}
                    >
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Price:</Text>
                            <Text>25€/ ton</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Amount:</Text>
                            <Text>150 ton</Text>
                        </Flex>
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Costs:</Text>
                            <Text>x%</Text>
                        </Flex>
                        <Divider />
                        <Flex direction="row" justifyContent="space-between">
                            <Text>Total:</Text>
                            <Text>3750,00€</Text>
                        </Flex>
                        <Button backgroundColor="green.300">Buy Now</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    </>)

}

export default ProjectDetails

