
import Layout from '@modules/layout/templates';
import Grid from '@mui/material/Grid'; // Grid version 1
import { signIn, signOut, useSession } from "next-auth/react"
import { type } from 'os';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from 'types/global';

type Post = {
        body: string;
        id: string;
        title: string;
        userid: string;
}
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

const TestAPI: NextPageWithLayout = () => {
    //const { data: session, status } = useSession()
    const [posts, setPosts] = useState<Customer[]>([]);
    const fetchData = () => {
        fetch('https://192.168.0.182:1234/crud/customer').then((response) => {
            return response.json();
        }).then((data) => {
            setPosts(data)
            console.log(data);
        })
    }

    useEffect(() => {
        fetchData();
    }, [] as any[]);

    return (
        <>
            <div className='flex-col my-10'>TEST</div>

            {posts.length > 0 && (
                <div className=''>
                    <div className=''>
                        {posts.map((post) => (
                            <div className=''>
                                <h3>{post.username}</h3>
                            </div>
                        ))
                        }
                    </div>
                </div>
            )}
        </>
    );


}

TestAPI.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>
}

export default TestAPI;