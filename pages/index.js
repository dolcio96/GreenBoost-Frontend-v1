
import { ReactElement } from "react"
import HomeLayout from "@components/layout/homeLayout"
import Head from "@components/head"
import HomeComponent from "@components/home"
import { useSession, getSession } from "next-auth/react"


export default function Home() {
  const { data: session, status } = useSession()

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


  if (session) {
    sessionStorage.setItem("userData", getCustomerData());
  }
  console.log(sessionStorage)

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
