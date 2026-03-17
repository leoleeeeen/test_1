import { useState, useEffect } from "react";
import type { Device } from "../DevicesListTypes";
import { fetchDevices } from "@/api/fetchDevices";
import { useNotification } from "@/context/NotificationContext";
import { useTranslation } from "react-i18next";

export function useDevices() {
    const [devices, setDevices] = useState<Device[] | []>([]);
    const { t } = useTranslation("devices");
    const { showNotification } = useNotification();

    //получение и установка списка устройств
    useEffect(() => {
        const loadDevices = async () => {

            const response = await fetchDevices();
            if (!response.ok) {
                setDevices([]);
                showNotification(response.error || "Failed to load devices");
                return;
            }
            setDevices(response.data);
        };

        loadDevices();
    }, [showNotification]);

    return {
        devices,
        t
    }
}