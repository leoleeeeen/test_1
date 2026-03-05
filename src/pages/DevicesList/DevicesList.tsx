import { Link } from "react-router-dom"
import type { Device } from "./DevicesListTypes";
import useDevices from "./hooks/useDevices";

//отображение списка устройств
function DevicesList() {
    const { devices } = useDevices();

    return (
        <div className="px-8 mb-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">Devices list</h1>
            <ul className="flex flex-col gap-2">
                {devices && devices.map((device: Device) =>
                    <Link to={`/device/${device.id}`} state={{ deviceName: device.name, deviceId: device.id }}>
                        <li key={device.id} className="py-2 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)]">
                            <p className="inline">{device.name}</p>
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default DevicesList
