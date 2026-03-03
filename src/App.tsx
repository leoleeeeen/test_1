import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import DevicesList from "./pages/DevicesList"
import PlayersList from "./pages/PlayersList"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <DevicesList /> },
      { path: "device/:0", element: <PlayersList /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
