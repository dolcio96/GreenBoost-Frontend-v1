
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import CertificateComponent from "@components/certificate"
export default function Create(props) {
    return (
        <>
            <Head
                title="GreenBoost: Create"
                description="GreenBoost: Create"
            />
            <CertificateComponent certificationDetails={props.certificationDetails}/>
        </>
    )
}

Create.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}


export async function getServerSideProps() {
    // Fetch data from external API
 /*   const { pid } = context.query;
 
    const res = await fetch(
        process.env.BACKEND_API_URL + `/api/project/${pid}`,
        {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        }
    )
    const project = await res.json()
*/
    const certificationDetails ={
        certificationId:"1234",
        buyer: "Company Name",
        date: "21/12/2023",
        projectName:"Project Name",
        quantity:"20",
        expirationDate:"31/12/2023",
        blockchainName:"polygon",
        txID:"1234",        
    } 


    // Pass data to the page via props
    return { props: { certificationDetails } }
}