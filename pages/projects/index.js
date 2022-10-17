
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import TableComponet from "@components/table"


//To retrieve
const tableContent = {}

export default function Projects() {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />

            <TableComponet tableHeader={tableContent}/>
        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
