import { Link } from "react-router-dom"

function DevicesList() {
    return (
        <div className="px-8">
            <h1 className="font-bold text-3xl text-gray-800 py-8">Devices list</h1>
            <div>
                <div className="py-2 px-4 rounded-xl shadow-[0_0_5px_rgba(0,0,0,0.20)]">
                    <Link to={`/device/${0}`}><p className="inline">Name</p></Link>
                </div>
            </div>
        </div>
    )
}

export default DevicesList
