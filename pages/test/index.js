
import { ReactElement } from "react"
import {
    Box,
    Grid,
    SimpleGrid,
    Input
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import TestComponent from "@components/test"

import ProjectDetailComponent from "@components/projectDetail/projectDetails.js"
import ChooseVCCComponent from "@components/projects"
import ProjectCard from "@components/projects/projectCard"
import ProfileBuyer from "@components/profile/profileOverviewBuyer"

//To retrieve
const tableContent = {}

export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: test"
                description="GreenBoost: test"
            />

            <TestComponent/>

        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

