
import Layout from '@modules/layout/templates';
import Grid from '@mui/material/Grid'; // Grid version 1
import { signIn, signOut, useSession } from "next-auth/react"
import { type } from 'os';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from 'types/global';
import { GetStaticProps } from 'next'

type Customer = {
    id: string;
    city_id: string;
    customer_address: string;
    username: string;
    bcrypt_pwd: string;
    email: string;
    phone: string;
    has_verified_email: false;
    insert_timestamp: string;
    update_timestamp: string;
}
type Customers = {
    customers: Customer[]
}



const TestAPI2: NextPageWithLayout<Customers> = ({ customers }) => {

    return (
        <>
            <div className='flex-col my-10'>TEST</div>
            {customers.map((a) => (<p>{a.username}</p>))}

        </>
    );


}

TestAPI2.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
export const getStaticProps: GetStaticProps = async (context) => {
    // Fetch data from external API
    const res = await fetch('http://localhost:1234/crud/customer')
    const customers: Customer[] = await res.json()
    customers.map(a => {
        console.log(a.username)
    })
    // Pass data to the page via props
    return {
        props: {
            customers,
        },
    }
}





export default TestAPI2;