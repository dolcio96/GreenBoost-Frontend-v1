
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import ProjectDetailComponent from "@components/projectDetail/test.js"
import ChooseVCCComponent from "@components/buy"

//To retrieve
const tableContent = {}

export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: test"
                description="GreenBoost: test"
            />

            {/*<ProjectDetailComponent />*/}
            <ChooseVCCComponent/>
        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

