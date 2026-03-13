import { useState, useEffect } from "react";
import type { Device } from "../DevicesListTypes";
import { fetchDevices } from "@/api/fetchDevices";

export function useDevices() {
    const [devices, setDevices] = useState<Device[] | []>([]);
    const [notification, setNotification] = useState("");

    //получение и установка списка устройств
    useEffect(() => {
        const loadDevices = async () => {

            const response = await fetchDevices();
            if (!response.ok) {
                setDevices([]);
                setNotification(response.error || "Failed to load devices");
                return;
            }
            setDevices(response.data);
        };

        loadDevices();
    }, []);

    return {
        devices,
        notification,
        setNotification
    }
}