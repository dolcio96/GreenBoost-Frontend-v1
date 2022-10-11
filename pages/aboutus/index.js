
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileComponet from "@components/profile"

import { Image } from "@chakra-ui/react";

const immagine= './Images/ImageArchitect1.png'

export default function Aboutus() {

    console.log(typeof ImageArchitect1);
    return (
        <>
            <Head
                title="GreenBoost: About Us"
                description="GreenBoost: About Us"
            />
            <Image src={immagine} borderRadius='15px' />
        </>
    )
}

Aboutus.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
