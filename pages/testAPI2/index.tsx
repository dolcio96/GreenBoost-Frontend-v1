
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



const TestAPI2: NextPageWithLayout<Customer[]> = (customers) => {

    return (
        <>
            <div className='flex-col my-10'>TEST</div>

            {customers.length > 0 && (
                <div className=''>
                    <div className=''>
                        {customers.map((customer) => (
                            <div className=''>
                                <h3>{customer.username}</h3>
                            </div>
                        ))
                        }
                    </div>
                </div>
            )}
        </>
    );


}

TestAPI2.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}
export const getStaticProps: GetStaticProps = async (context) => {
    // Fetch data from external API
    const res = await fetch('https://192.168.0.182:1234/crud/customer')
    const customers: Customer[] = await res.json()

    // Pass data to the page via props
    return {
        props: {
            customers,
        }, }
}





export default TestAPI2;