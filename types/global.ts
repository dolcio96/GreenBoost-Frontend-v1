//import { Product } from "@medusajs/medusa"
import { NextPage } from "next"
import { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"


// For pages with nested layouts
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout<P = {}, IP = P> = AppProps<P> & {
  Component: NextPageWithLayout<P, IP>
}
