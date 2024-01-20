import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'
import Authentification from './pages/authentification'
import DaeRender from './components/DaeRender'
import HomePage from './pages/homePage'
import HowToUse from './pages/HowToUse'
import Profil from './pages/profil/profil'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
import AppDae from './pages/appDae'
import CityList from './components/appDAE/CityList'
import City from './components/appDAE/City'
import RegionList from './components/appDAE/RegionList'
import DaeList from './components/appDAE/DaeList'
import ErrorPage404 from './pages/errorPage404'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/searchDAE',
      element: <DaeRender />,
    },
    {
      path: '/info',
      element: <HowToUse />,
    },

    {
      path: '/auth',
      element: <Authentification />,
    },
    {
      path: '/profil',
      element: (
        <Protected>
          <Profil />
        </Protected>
      ),
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/app',
      element: <AppDae />,
      children: [
        {
          index: true,
          element: <Navigate to="/app/cities" replace />,
        },
        {
          path: 'cities',
          element: <CityList />,
        },
        {
          path: 'cities/:id',
          element: <City />,
        },
        {
          path: 'regions',
          element: <RegionList />,
        },
        {
          path: 'search',
          element: <DaeList />,
        },
      ],
    },
    {
      path: '*',
      element: <ErrorPage404 />,
    },
  ])
  return (
    <ThemeProvider>
      <AuthContext>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </AuthContext>
    </ThemeProvider>
  )
}

export default App
