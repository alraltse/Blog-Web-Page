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
import SingleArticle from './pages/SingleArticle'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SearchProvider } from './components/SearchContext'
import './styles/login-register.css'
import './styles/home.css'
import './styles/navbar.css'
import './styles/footer.css'
import './styles/navbar.css'
import './styles/singleArticle.css'

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
      <SearchProvider>
        <RouterProvider router={router} />
      </SearchProvider>
  </StrictMode>
)
