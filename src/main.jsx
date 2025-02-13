import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import ErrorPage from "./COMPONENTS/ErrorPage.jsx";
import Home from "./components/pages/Home/Home.jsx";
import UpdateProfile from "./components/pages/UpdateProfile/UpdateProfile.jsx";
import Register from "./components/pages/Register/Register.jsx";
import AllAdventure from "./components/pages/AllAdventure/AllAdventure.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/adventure",
        element: <AllAdventure></AllAdventure>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
