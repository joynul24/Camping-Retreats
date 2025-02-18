import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout.jsx";
import ErrorPage from "./COMPONENTS/ErrorPage.jsx";
import Home from "./components/pages/Home/Home.jsx";
import UpdateProfile from "./components/pages/UpdateProfile/UpdateProfile.jsx";
import AllAdventure from "./components/pages/AllAdventure/AllAdventure.jsx";
import CardDetails from "./components/pages/CardDetails/CardDetails.jsx";
import Login from "./components/pages/Login/Login.jsx";
import Register from "./components/pages/Register/Register.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import MyProfile from "./components/pages/MyProfile/MyProfile.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

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
        loader: () => fetch("/adventures.json"),
      },
      {
        path: "/CardDetails/:id",
        loader: async ({ params }) => {
          const res = await fetch("/adventures.json");
          const datas = await res.json();
          const singleData = datas.find((data) => data.id == params.id);
          return singleData;
        },
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      },
      {
        path: '/myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: "/login",
        element: <Login></Login>,
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
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
