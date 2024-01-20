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
import { useEffect, useState } from 'react'
import useFetchDAE from './hooks/useFetchDAE'

function App() {
  const { data, isLoadingDAE, error } = useFetchDAE()

  // console.log(data)
  // console.log(typeof data)
  // console.log(data[0])

  // console.log(data)

  const [cities, setCities] = useState(data.c_com_nom)
  // console.log(cities)
  // const [isLoading, setIsLoading] = useState(isLoadingDAE)

  // useEffect(() => {
  //   const fetchCities = async () => {
  //     try {
  //       setIsLoading(true)
  //       // eslint-disable-next-line no-use-before-define
  //       const response = await fetch(data)
  //       const data = await response.json()
  //       setCities(data)
  //     } catch (error) {
  //       alert('Something went wrong with fetching cities')
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchCities()
  // }, [])

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
