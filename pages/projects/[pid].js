
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import ProjectDetailComponent from "@components/projectDetail"

import TableComponet from "@components/table"


//To retrieve
const tableContent = {}

export default function Project(props) {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />
            <ProjectDetailComponent {...props} />
        </>
    )
}

Project.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const { pid } = context.query;

    const res = await fetch(
        `http://192.168.0.182:1234/api/crud/project/${pid}`,
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }
    )
    const project = await res.json()

    // Pass data to the page via props
    return { props: { project } }
}