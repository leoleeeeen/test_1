import { Layout } from "./components/Layout";
import { DevicesList } from "./pages/DevicesList/DevicesList";
import { PlayersList } from "./pages/PlayersList/PlayersList";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <DevicesList /> },
            { path: "device/:deviceId", element: <PlayersList /> }
        ]
    }
]
