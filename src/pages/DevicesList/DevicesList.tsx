import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import fetchDevices from "../../api/fetchDevices";
import type { Device } from "./DevicesListTypes";

function DevicesList() {
    const [devices, setDevices] = useState<Device[] | null>(null);

    useEffect(() => {
        fetchDevices().then(data => {
            setDevices(data);
        });
    }, []);

    return (
        <div className="px-8 mb-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">Devices list</h1>
            <ul className="flex flex-col gap-2">
                {devices && devices.map((device: Device) =>
                    <li key={device.id} className="py-2 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)]">
                        <Link to={`/device/${device.id}`} state={{ deviceName: device.name, deviceId: device.id }}><p className="inline">{device.name}</p></Link>
                    </li>
                )}

            </ul>
        </div>
    )
}

export default DevicesList
