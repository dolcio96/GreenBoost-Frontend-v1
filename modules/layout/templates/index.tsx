//import Footer from "../templates/footer/index"
import Nav from "../templates/nav"
import { FunctionComponent, ReactNode } from "react";


export interface Props {
    children: ReactNode; }

const Layout = ({ children }: Props) => {
    return (
        <div>
        <Nav />
        <main className="relative">{children}</main>{/*
        <Footer />*/}
      </div>
    )
}

export default Layout