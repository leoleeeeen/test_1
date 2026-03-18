import { createContext, useContext } from "react";

type NotificationContextType = {
    notification: string | null;
    showNotification: (message: string) => void;
    closeNotification: () => void;
    pauseNotification: () => void;
    resumeNotification: () => void;
};

export const NotificationContext = createContext<NotificationContextType | null>(null);

export function useNotification() {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used inside NotificationProvider");
    }
    return context;
}

