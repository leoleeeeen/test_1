import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout"
import { DevicesList } from "./pages/DevicesList/DevicesList"
import { PlayersList } from "./pages/PlayersList/PlayersList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DevicesList /> },
      { path: "device/:deviceId", element: <PlayersList /> }
    ]
  }
],
  {
    basename: '/test_1'
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
