import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { NotificationProvider } from "./context/NotificationProvider"

const router = createBrowserRouter(
  routes,
  {
    basename: '/test_1'
  }
)

function App() {
  return <NotificationProvider>
    <RouterProvider router={router} />
  </NotificationProvider>
}

export default App
