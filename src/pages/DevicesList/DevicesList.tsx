import { Link } from "react-router-dom"
import type { Device } from "./DevicesListTypes";
import { useDevices } from "./hooks/useDevices";
import { Notification } from "../../components/Notification";

//отображение списка устройств
export function DevicesList() {
    const { devices,
        notification,
        setNotification } = useDevices();

    return (
        <div className="px-8 mb-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">Devices list</h1>
            <ul className="flex flex-col gap-2">
                {devices && devices.map((device: Device) =>
                    <Link key={device.id} to={`/device/${device.id}`} state={{ deviceName: device.name, deviceId: device.id }}>
                        <li className="py-2 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)]">
                            <p className="inline">{device.name}</p>
                        </li>
                    </Link>
                )}
            </ul>
            {notification && <Notification notification={notification} onClose={() => setNotification("")}></Notification>}
        </div>
    )
}


