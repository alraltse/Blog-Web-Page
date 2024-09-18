import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './pages/Main'
import SingleArticle from './pages/SingleArticle'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/register.scss'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/post/:id",
        element: <SingleArticle />
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="web-page">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
)
