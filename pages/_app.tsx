import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from "../types/global"
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextPage } from 'next';
import { ReactNode, ReactElement } from 'react'




function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
  
  return <>
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>


  </>
}

export default App
