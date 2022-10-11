//import Footer from "../templates/footer/index"
import Nav from "../nav"
import { FunctionComponent, ReactNode } from "react";
import Footer from "../footer";


const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className="relative">{children}</main>
            <Footer />
        </>
    )
}

export default Layout