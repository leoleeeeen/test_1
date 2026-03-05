import { useState, useEffect } from "react";
import fetchDevices from "../../../api/fetchDevices";
import type { Device } from "../DevicesListTypes";

export default function useDevices() {
    const [devices, setDevices] = useState<Device[] | null>(null);

    //получение и установка списка устройств
    useEffect(() => {
        fetchDevices().then(data => {
            setDevices(data);
        });
    }, []);

    return {
        devices
    }
}