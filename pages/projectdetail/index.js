
import { ReactElement } from "react"
import Layout from "@components/layout"
import ProjectDetailComponent from "@components/projectDetail"
import Head from "@components/head"

export default function ProjectDetail() {
    return (
        <>
            <Head
                title="GreenBoost: Project Detail"
                description="GreenBoost: ProjectDetail."
            />

            <ProjectDetailComponent />
        </>
    )
}

ProjectDetail.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
