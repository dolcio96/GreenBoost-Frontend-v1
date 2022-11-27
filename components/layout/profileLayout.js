//import Footer from "../templates/footer/index"
import Nav from "../nav"
import { FunctionComponent, ReactNode } from "react";
import Footer from "../footer";
import ProfileNav from "../profile/profilenav";
import {
    Box,
} from "@chakra-ui/react";


const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <Box p={8}>
                <ProfileNav />
                <main style={{ paddingTop: "0px" }} className="relative" >{children}</main>
            </Box>
            <Footer />
        </>
    )
}

export default Layout