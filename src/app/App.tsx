import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PAGES } from "./router/appRouter";
import { ConfigProvider } from "antd";

function App() {
  const router = createBrowserRouter(PAGES);
  return (
    <ConfigProvider
    >
      <RouterProvider router={router}/>
    </ConfigProvider>
  )
}

export default App
