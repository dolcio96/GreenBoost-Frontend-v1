
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
import Head from "@components/head"
import HomeComponent from "@components/home"
import { useSession, getSession } from "next-auth/react"


export default function Home({props}) {
  const { data: session, status } = useSession()
/*
  async function getCustomerData() {

    const userID = session.user.id
    const userType = session.user.customer_type

    const response = await fetch("/api/backend/getCustomerData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userType: userType, userID: userID }),
    });

    if (!response.ok) {
      console.log('nok');
    }
    return await response.json()
  }
 */
/*
  if (session) {
    sessionStorage.setItem("userData", getCustomerData());
  }
  console.log(sessionStorage)
*/
  return (
    <>
      <Head
        title="GreenBoost"
        description="GreenBoost."
      />

      <HomeComponent />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>
}


/* 
export async function getServerSideProps(context) {

  const Mailjet = require('node-mailjet');
  // Fetch data from external API
  const email = context.query.email
  const type = context.query.type


    const mailjet = Mailjet.apiConnect(
      '483dd7f7f17487e32497f0b621dbf748',
      'a6c1f7062f0499a863f8a45c1e3c6c6a'
    );

    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: "admin@greenboost.it",
            },
            To: [
              {
                Email: "admin@greenboost.it",
              }
            ],
            Subject: "Your email flight plan!",
            TextPart: "Email:" + email+ " Type: " + type,
            HTMLPart: ""
          }
        ]
      })

    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })

 
  }


  return { props: {} }
} */