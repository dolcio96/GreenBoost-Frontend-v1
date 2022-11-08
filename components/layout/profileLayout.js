//import Footer from "../templates/footer/index"
import Nav from "../nav"
import { FunctionComponent, ReactNode } from "react";
import Footer from "../footer";
import ProfileNav from "../profile/profilenav";



const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <ProfileNav/>
            <main style={{paddingTop:"0px"}} className="relative" >{children}</main>
            <Footer />
        </>
    )
}

export default Layout