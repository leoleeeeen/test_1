import { useState, useEffect } from "react";
import type { Device } from "../DevicesListTypes";
import { fetchDevices } from "../../../api/fetchDevices";



export function useDevices() {
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