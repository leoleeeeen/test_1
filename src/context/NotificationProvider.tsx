import { type ReactNode, useState } from "react";
import { NotificationContext } from "./NotificationContext";

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notification, setNotification] = useState<string | null>(null);

    const showNotification = (message: string) => {
        setNotification(message);

        setTimeout(() => {
            setNotification(null);
        }, 4000);
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <NotificationContext.Provider
            value={{ notification, showNotification, closeNotification }}
        >
            {children}
        </NotificationContext.Provider>
    );
}