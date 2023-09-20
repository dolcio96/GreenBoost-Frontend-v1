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
    Tooltip,
    useDisclosure,
} from '@chakra-ui/react';

import { useAnimation, motion } from "framer-motion"

import ImageArchitect1 from "@public/Images/bamboo.jpg";

import { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon } from "@lib/icons";

import { mapIcon } from "@lib/mapIcon";

const iconSize = 36

const Icons = [<EolicIcon key={1} size={36} />, <TrashIcon key={2} size={36} />, <BambooIcon key={3} size={36} />,
<NuclearIcon key={4} size={36} />, <ForestIcon key={5} size={36} />, <LeafIcon key={6} size={36} />, <ChemicalIcon key={7} size={36} />]



const ProjectCard = ({project}) => {
console.log(project)
    //console.log(project)
    const MotionFlex = motion(Flex)

    return (<>
        <MotionFlex direction='column'  p='10px' borderRadius='10px' whileHover={{ scale: 1.05 }}>
            <LinkBox  >
                <LinkOverlay href={'/projects/' + project.id}>
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
                                {project.name}
                            </Text>
                        </Center>
                        <Text
                            fontSize='md'
                            color="gray.800"
                            fontWeight='bold'
                            mb='10px'>
                            {project.country.name}
                        </Text>
                        <Text fontSize='md' color='gray.400' fontWeight='400' mb='20px' noOfLines={2}>
                            {project.description}
                        </Text>
                        <Flex justifyContent='center' gap={3} >
                         {/*  <EolicIcon/>
                          <ForestIcon/>
                          <LeafIcon/>
                       */}
                     
                     {mapIcon(project.project_type.name,"48px", "green")?
                     mapIcon(project.project_type.name,"48px", "green"):
                     <LeafIcon/>}

                        </Flex>
                    </Flex>
                </LinkOverlay>
            </LinkBox>
        </MotionFlex>

    </>)

}

export default ProjectCard
