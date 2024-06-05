
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
//import TableComponet from "@components/table"
import ProjectsComponent from "@components/projects"

const color1 = "#70D6FF"
const color1s = "#0A739D"
const color2 = "#B8A3D3"
const color2s = "#8051BD"
const color3 = "#FF70A6"
const color3s = "#D61961"
const color4 = "#FF9770"
const color4s = "#E25826"
const color5 = "#FFD670"
const color5s = "#DFA410"
const color6 = "#E9FF70"
const color6s = "#C2DF20"

import {projects} from "@public/json/project.json";




export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />

            <ProjectsComponent projects={projects} />
        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
