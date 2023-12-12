
import { ReactElement } from "react"
import {
    Container,
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import ProjectTypeDetailComponent from "@components/projects/projectType"
import {details} from "@public/json/projectDetails.json";


export default function ProjectTypeDetails(props) {
    console.log(props);
    const projectDetails = details[props.ptid];
    console.log(projectDetails);
    return (

        <>
            <Head
                title={"GreenBoost: " + `${projectDetails.title}`}
                description={"GreenBoost: " + `${projectDetails.title}`}
            />
            <ProjectTypeDetailComponent projectDetails={projectDetails} />
        </>
    )
}

ProjectTypeDetails.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    const { ptid } = context.query;

    // Pass data to the page via props
    return { props: { ptid } }
}