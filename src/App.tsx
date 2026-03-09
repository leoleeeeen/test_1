import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"

const router = createBrowserRouter(
  routes,
  {
    basename: '/test_1'
  }
)

function App() {
  return <RouterProvider router={router} />
}

export default App
