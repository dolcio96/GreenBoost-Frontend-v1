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
    Collapse,
} from "@chakra-ui/react";

import { EolicIcon, TrashIcon, BambooIcon, NuclearIcon, ForestIcon, LeafIcon, ChemicalIcon } from "@lib/icons";


import React, { useState } from "react";

const Icons = [<EolicIcon size={36} />, <TrashIcon size={36} />, <BambooIcon size={36} />,
<NuclearIcon size={36} />, <ForestIcon size={36} />, <LeafIcon size={36} />, <ChemicalIcon size={36} />]

const projects = {
    uno: { projectName: "Progetto 1", projectTypes: [Icons[1], Icons[3], Icons[4]], location: "U.S.A", quantity: "5", date: "10/11/2022", expirationDate: "31/12/2022", txLink: "" },
    due: { projectName: "Progetto 2", projectTypes: [Icons[0], Icons[2], Icons[3]], location: "France", quantity: "10", date: "09/10/2022", expirationDate: "31/12/2021", txLink: "" },
}



import ProjectRowComponent from "@components/projects/projectRow"


function ProfileProjectsBuyer() {


    return (
        <>
            <Box minH={"80vh"}>
                <Center><Heading my={3} color="primary" fontSize={50}>My Carbon Credits</Heading></Center>
                {Object.keys(projects).map((key, index) => {
                    return (<>
                        <ProjectRowComponent projectName={projects[key].projectName} projectTypes={projects[key].projectTypes}
                            location={projects[key].location} quantity={projects[key].quantity}
                            date={projects[key].date} expirationDate={projects[key].expirationDate}
                            txLink={projects[key].txLink}
                        />
                    </>
                    )
                })}
            </Box>



        </>
    );
}

export default ProfileProjectsBuyer;
