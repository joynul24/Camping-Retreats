import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import ErrorPage from './COMPONENTS/ErrorPage.jsx'
import Home from './components/pages/Home/Home.jsx'
import ContactUs from './components/pages/ContactUs/ContactUs.jsx'
import UpdateProfile from './components/pages/UpdateProfile/UpdateProfile.jsx'
import Register from './components/pages/Register/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/contactUs',
        element: <ContactUs></ContactUs>
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
