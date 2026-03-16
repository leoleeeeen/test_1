import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Notification } from "./Notification/Notification"
import { useNotification } from "@/context/NotificationContext"

//лэйаут с хедером и футером 
export function Layout() {
    const { notification, closeNotification } = useNotification();
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Notification
                notification={notification || ""}
                onClose={closeNotification} />
        </>
    )
}


