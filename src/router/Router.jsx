import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx"
import Lodging from "../pages/Lodging/Lodging.jsx"
import NotFound from "../pages/NotFound/NotFound.jsx"
import Layout from "../layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/a-propos",
        element: <About />,
      },
      {
        path: "/logement/:id",
        element: <Lodging />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;