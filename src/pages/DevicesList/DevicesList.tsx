import { Link } from "react-router-dom"
import type { Device } from "./DevicesListTypes";
import { useDevices } from "./hooks/useDevices";
import { useTranslation } from "react-i18next";


//отображение списка устройств
export function DevicesList() {
    const { devices } = useDevices();
    const { t } = useTranslation("devices");

    return (
        <div className="px-8 mb-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">{t("devices_list")}</h1>
            <ul className="flex flex-col gap-2">
                {devices?.map((device: Device) =>
                    <Link key={device.id} to={`/device/${device.id}`} state={{ deviceName: device.name, deviceId: device.id }}>
                        <li className="py-2 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)]">
                            <p className="inline">{device.name}</p>
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}


