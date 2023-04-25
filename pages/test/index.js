
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

import ProjectDetailComponent from "@components/projectDetail/projectDetails.js"
import ChooseVCCComponent from "@components/projects"
import ProjectCard from "@components/projects/projectCard"
import ProfileBuyer from "@components/profile/profileOverviewBuyer"


import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutFormComponent from "@components/checkoutForm";
import OrderComponent from "@components/order"



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);



//To retrieve
const tableContent = {}

export default function Projects() {

    const [clientSecret, setClientSecret] = React.useState("");

    React.useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/api/stripe/account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };


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



