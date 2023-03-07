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
import ProjectRowBuyerComponent from "@components/projects/projectRowBuyer"
const Icons = [<EolicIcon key={1} size={36} />, <TrashIcon key={2} size={36} />, <BambooIcon key={3} size={36} />,
<NuclearIcon key={4} size={36} />, <ForestIcon key={5} size={36} />, <LeafIcon key={6} size={36} />, <ChemicalIcon key={7} size={36} />]


function ProfileProjectsBuyer() {
    var { data: session, status } = useSession()
    var projects = session?.user.projects

    return (
        <>
            <Box minH={"80vh"}>
                <Center><Heading my={3} color="primary" fontSize={50}>Project Seller</Heading></Center>

                <ProjectRowBuyerComponent key={"project.id"} projectId={"project.id"} projectName={"project.id"} projectTypes={["project.project_type"]}
                    location={"U.S.A."} quantity={"project.count"}
                    date={"project.insert_timestamp"} expirationDate={"31/12/2022"}
                    txLink={"https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"}
                />


                <ProjectRowBuyerComponent key={"project.id"} projectId={"project.id"} projectName={"project.id"} projectTypes={["project.project_type"]}
                    location={"U.S.A."} quantity={"project.count"}
                    date={"project.insert_timestamp"} expirationDate={"31/12/2022"}
                    txLink={"https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"}
                />


                {/*    {status = "loading" ?
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor="#b7e4c7"
                        color="#0B0E3F"
                        size='xl' /> :
                    projects.map((project, index) => {
                        return (
                            <ProjectRowBuyerComponent key={project.id} projectId={project.id} projectName={project.id} projectTypes={project.project_type}
                                location={"U.S.A."} quantity={project.count}
                                date={project.insert_timestamp} expirationDate={"31/12/2022"}
                                txLink={"https://mumbai.polygonscan.com/tx/0x99ce5cf9971e860fed4e9236c7e1c1298b630103ebd5e113860315fe45958f3c"}
                            />

                        )
                    })}

               */}
            </Box>



        </>
    );
}

export default ProfileProjectsBuyer;
