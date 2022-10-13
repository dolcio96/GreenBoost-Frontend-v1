
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import ProfileComponet from "@components/profile/profile-overview"
import TestComponent from "@components/test"

import LoginComponent from "@components/auth/signin"

import { Image } from "@chakra-ui/react";

const immagine = './Images/ImageArchitect1.png'

const test = {
    uno: "abc",
    due: "def"
}
export default function Aboutus() {
    console.log({ ...test });
    return (
        <>
            <Head
                title="GreenBoost: About Us"
                description="GreenBoost: About Us"
            />
            <LoginComponent/>

        </>
    )
}

Aboutus.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
