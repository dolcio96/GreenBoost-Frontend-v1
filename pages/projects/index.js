
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import TableComponet from "@components/table"
import BuyComponent from "@components/buy"


//To retrieve
const tableContent = {}

export default function Projects({ data }) {
    return (
        <>
            <Head
                title="GreenBoost: Projects"
                description="GreenBoost: Projects"
            />

            <BuyComponent projects={data} />
        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(
        "http://192.168.0.182:1234/api/crud/project",
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }
    )
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}