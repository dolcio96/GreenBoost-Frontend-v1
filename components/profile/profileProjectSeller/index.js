// Chakra imports
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Flex,
    Center,
    Grid,
    Image,
    Text,
    useColorMode,
    useColorModeValue,
    Heading,
    Stack,
    VStack,
    useDisclosure,
    Spinner,
} from "@chakra-ui/react";

import { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon } from "@lib/icons";
import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ProjectRowSellerComponent from "@components/projects/projectRowSeller"
const Icons = [<EolicIcon key={1} size={36} />, <TrashIcon key={2} size={36} />, <BambooIcon key={3} size={36} />,
<NuclearIcon key={4} size={36} />, <ForestIcon key={5} size={36} />, <LeafIcon key={6} size={36} />, <ChemicalIcon key={7} size={36} />]


function ProfileProjectsSeller({ userInfo }) {
    var { data: session, status } = useSession()
    console.log("INFO")
    console.log(userInfo)
    console.log(status)
    return (
        <>
            <Box minH={"80vh"}>
                <Center>
                    <Heading my={3} color="primary" fontSize={50}>Project Seller</Heading>
                </Center>
                <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap='22px' justifyContent={"center"}>
                    <GridItem colSpan={{ sm: 3, md: 2 }}>
                        {
                            userInfo.projects.map((project, index) => {
                                return (
                                    <ProjectRowSellerComponent
                                        key={index}
                                        project={project} />

                                )
                            })}
                    </GridItem>
                    <GridItem colSpan={{ sm: 3, md: 1 }}> "ABC"</GridItem>

                </Grid>
            </Box>
        </>
    );
}

export default ProfileProjectsSeller;
