import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/Layout";
import { AuthenticationPage } from "./pages/Authentication";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <AuthenticationPage />,
      },
      { path: "home", element: <Home /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
