import '../styles/globals.css'
import { useEffect } from 'react';
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react';
//import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import { useLanguage, LanguageProvider } from '@context/LanguageContext'
import { myTheme } from 'styles/theme';
import GoogleAnalytics from '@components/GoogleAnalytics';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)




  return <>
  <GoogleAnalytics />
   <SessionProvider session={session}> 
       <ChakraProvider theme={myTheme}>
          <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            {getLayout(<Component {...pageProps} />)}
            </LanguageProvider>
        </I18nextProvider>  
      </ChakraProvider>
    </SessionProvider>

  </>
}

export default MyApp
