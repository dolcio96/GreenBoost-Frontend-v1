import '../styles/globals.css'
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useLanguage, LanguageProvider } from '@context/LanguageContext'
//import '../styles/test.scss'
//import '../styles/test2.scss'
import { myTheme } from 'styles/theme';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)




  return <>

   <SessionProvider session={session}> 
       <ChakraProvider theme={myTheme}>
        <PayPalScriptProvider options={{ "client-id": "AWm2ig42-ElKU-LE3V-_iLF-hRhC_T_CJJgXoffiS7GuckkY-FOGCSC8U5ucx92nb6BbfYMWoOt_1ijz" }}>
          <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            {getLayout(<Component {...pageProps} />)}
            </LanguageProvider>
        </I18nextProvider>  
        </PayPalScriptProvider>
      </ChakraProvider>
    </SessionProvider>

  </>
}

export default MyApp
