import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

//лэйаут с хедером и футером 
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
