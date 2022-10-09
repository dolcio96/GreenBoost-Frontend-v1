import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; // Grid version 1
import { signIn, signOut, useSession } from "next-auth/react"
import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';


interface Inter {
    profile?: {
        id: string;
        name: string;
    }[]
};




const Profile = ({ profile }: Inter) => {
    const { data: session, status } = useSession()
   
    //if (status === "authenticated") {
    return (
        <>
            <Container>
                Profilo
                <div>
                    <Grid container>
                        {profile?.map(({ id, name }) => (
                            <Grid xs={12}>

                                <TextField key={id}
                                    id="outlined-helperText"
                                    label={name}
                                    defaultValue="name"
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>



            </Container >
        </>
    );
    // }

}

export default Profile;