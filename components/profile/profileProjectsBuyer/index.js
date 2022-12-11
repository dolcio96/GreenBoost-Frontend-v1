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

import { useSession } from "next-auth/react"
import React, { useState } from "react";
import ProjectRowComponent from "@components/projects/projectRow"
const Icons = [<EolicIcon size={36} />, <TrashIcon size={36} />, <BambooIcon size={36} />,
<NuclearIcon size={36} />, <ForestIcon size={36} />, <LeafIcon size={36} />, <ChemicalIcon size={36} />]

const projects2 = {
    uno: { projectName: "Progetto 1", projectTypes: [Icons[1], Icons[3], Icons[4]], location: "U.S.A", quantity: "5", date: "10/11/2022", expirationDate: "31/12/2022", txLink: "" },
    due: { projectName: "Progetto 2", projectTypes: [Icons[0], Icons[2], Icons[3]], location: "France", quantity: "10", date: "09/10/2022", expirationDate: "31/12/2021", txLink: "" },
}

function ProfileProjectsBuyer() {
    const { data: session, status } = useSession()
    const projects = session.user.projects

    return (
        <>
            <Box minH={"80vh"}>
                <Center><Heading my={3} color="primary" fontSize={50}>My Carbon Credits</Heading></Center>
                {projects.map((project, index) => {
                    return (
                        <ProjectRowComponent projectName={project.id} projectTypes={project.project_type}
                            location={"U.S.A."} quantity={project.count}
                            date={project.insert_timestamp} expirationDate={"31/12/2022"}
                            txLink={"https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"}
                        />

                    )
                })}
                {/* {Object.keys(projects).map((key, index) => {
                    return (<>

                        <ProjectRowComponent projectName={projects[key].projectName} projectTypes={projects[key].projectTypes}
                            location={projects[key].location} quantity={projects[key].quantity}
                            date={projects[key].date} expirationDate={projects[key].expirationDate}
                            txLink={projects[key].txLink}
                        /> 

                    </>
                    )
                })}*/}
            </Box>



        </>
    );
}

export default ProfileProjectsBuyer;
