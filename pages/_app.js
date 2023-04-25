import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from '@chakra-ui/react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//import '../styles/test.scss'
//import '../styles/test2.scss'
import { myTheme } from 'styles/theme';

function MyApp({
  Component,
  pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page)

  async function getCustomerData() {

    const userID = session.user.customer_type
    const userType = session.user.id

    const response = await fetch("/api/backend/getCustomerData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userType: userType,  userID: userID}),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json()
  }


  if (session) {
    sessionStorage.setItem("userData", getCustomerData());
  }
  else console.log(session)

  return <>

    <SessionProvider session={session}>
      <ChakraProvider theme={myTheme}>
        <PayPalScriptProvider options={{ "client-id": "AWm2ig42-ElKU-LE3V-_iLF-hRhC_T_CJJgXoffiS7GuckkY-FOGCSC8U5ucx92nb6BbfYMWoOt_1ijz" }}>
          {getLayout(<Component {...pageProps} />)}
        </PayPalScriptProvider>
      </ChakraProvider>
    </SessionProvider>

  </>
}

export default MyApp
