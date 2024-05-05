import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Bookmark from "./pages/Boomark";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import { Layout } from "./components/Layout";
import { AuthenticationPage } from "./pages/Authentication";
import { Wrapper } from "./components/Wrapper";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <AuthenticationPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { path: "home", element: <Home /> },
      { path: "bookmark", element: <Bookmark /> },
      { path: "movies", element: <Movies /> },
      { path: "tv-series", element: <TVSeries /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
