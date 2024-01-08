import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "~react-pages";
import Loader from "./components/Loader";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
]);

// React.Suspense composant doit être plus haut que le composant paresseux
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
