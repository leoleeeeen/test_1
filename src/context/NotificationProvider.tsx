import { type ReactNode, useRef, useState } from "react";
import { NotificationContext } from "./NotificationContext";

const NOTIFICATION_TIMER = 4000;
const NOTIFICATION_PAUSE_TIMER = 2000;

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notification, setNotification] = useState<string | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const showNotification = (message: string) => {
        setNotification(message);

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, NOTIFICATION_TIMER);
    };

    const pauseNotification = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const resumeNotification = () => {
        timeoutRef.current = setTimeout(() => {
            setNotification(null);
        }, NOTIFICATION_PAUSE_TIMER);
    };

    const closeNotification = () => {
        setNotification(null);
    };

    return (
        <NotificationContext.Provider
            value={{
                notification,
                showNotification,
                pauseNotification,
                resumeNotification,
                closeNotification
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
}