
import Head from "@components/head"
import PaypalComponent from "@components/paypal"
import ProfileLayout from "@components/layout/profileLayout"

export default function Paypal() {
  return (

    <>
      <Head
        title="GreenBoost: Paypal"
        description="GreenBoost: Paypal"
      />
      < PaypalComponent/>
    </>
  )
}

Paypal.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>
}
