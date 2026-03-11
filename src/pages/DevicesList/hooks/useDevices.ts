import { useState, useEffect } from "react";
import type { Device } from "../DevicesListTypes";
import { fetchDevices } from "@/api/fetchDevices";

export function useDevices() {
    const [devices, setDevices] = useState<Device[] | null>(null);
    const [notification, setNotification] = useState("");

    //получение и установка списка устройств
    useEffect(() => {
        const loadDevices = async () => {
            try {
                const response = await fetchDevices();
                setDevices(response?.data);
            } catch (error) {
                if (error instanceof Error) setNotification(error.message || "Failed to load devices");
            }
        };

        loadDevices();
    }, []);

    return {
        devices,
        notification,
        setNotification
    }
}