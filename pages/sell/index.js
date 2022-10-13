
import { ReactElement } from "react"
import Layout from "@components/layout"
import Head from "@components/head"
import SellComponent from "@components/sell"
export default function Sell() {
    return (
        <>
            <Head
                title="GreenBoost: Sell"
                description="GreenBoost: Sell"
            />
            <SellComponent />
        </>
    )
}

Sell.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>
}
