import { ReactElement, useState, useEffect } from "react"
import {
    Flex,
    Center,
    Box,
    Image,
    AvatarGroup,
    useColorModeValue,
    Text,
    Avatar,
    LinkBox,
    LinkOverlay,

    useDisclosure,
} from '@chakra-ui/react';
import { useAnimation, motion } from "framer-motion"

import ImageArchitect1 from "@public/Images/bamboo.jpg";
// Custom components

import avatar2 from "@public/Images/avatars/avatar2.png";
import avatar3 from "@public/Images/avatars/avatar3.png";
import avatar4 from "@public/Images/avatars/avatar4.png";
import avatar6 from "@public/Images/avatars/avatar6.png";

const ProjectCard = (props) => {
const MotionFlex = motion(Flex)
    return (<>
        <MotionFlex direction='column' bg="gray.200" p='10px' borderRadius='10px' whileHover={{ scale: 1.05 }}>
            <LinkBox  >
                <LinkOverlay href={'/projects/' + "link"}>
                    <Box mb='20px' position='relative' borderRadius='10px' bg="gray.200">
                        <Image src={ImageArchitect1.src} borderRadius='10px' />
                        <Box
                            w='100%'
                            h='100%'
                            position='absolute'
                            top='0'
                            borderRadius='10px'
                            bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
                    </Box>
                    <Flex direction='column' px="15px">
                        <Center>
                            <Text fontSize='2xl' color='black' fontWeight='600' mb='10px'>
                                Project Name
                            </Text>
                        </Center>
                        <Text
                            fontSize='md'
                            color="gray.800"
                            fontWeight='bold'
                            mb='10px'>
                            West America
                        </Text>
                        <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' noOfLines={2}>
                            Description Description Description Description DescriptionD escriptionDescriptionD escriptionDescr iptionDescription Description...
                        </Text> 
                        <Flex justifyContent='center' gap={3} >
                            <Avatar name='Ryan Florence' src={avatar6} size={"md"} />
                            <Avatar name='Segun Adebayo' src={avatar2} size={"md"} />
                            <Avatar name='Kent Dodds' src={avatar3} size={"md"} />
                            <Avatar name='Prosper Otemuyiwa' src={avatar4} size={"md"} />

                        </Flex>
                    </Flex>
                </LinkOverlay>
            </LinkBox>
        </MotionFlex>

    </>)

}

export default ProjectCard
