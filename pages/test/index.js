
import { ReactElement } from "react"
import {
    Box,
    Grid,
    SimpleGrid,
    Input
} from "@chakra-ui/react";
import Layout from "@components/layout"
import Head from "@components/head"
import TestComponent from "@components/test"

import ProjectDetailComponent from "@components/projectDetail/projectDetailsOLD.js"
import ChooseVCCComponent from "@components/projects"
import ProjectCard from "@components/projects/projectCard"
import ProfileBuyer from "@components/profile/profileOverviewBuyer"


import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutFormComponent from "@components/checkoutForm";
import OrderComponent from "@components/order"
import { useTranslation } from "react-i18next";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);



//To retrieve
const tableContent = {}

export default function Projects() {


    return (
        <>
            <Head
                title="GreenBoost: test"
                description="GreenBoost: test"
            />

           <TestComponent/>
      

        </>
    )
}

Projects.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
