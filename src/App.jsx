import {
  // Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
  // createBrowserRouter,
} from 'react-router-dom'

// import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'
import Authentification from './pages/authentification'
// import DaeRender from './components/DaeRender'
import HomePage from './pages/homePage'
import HowToUse from './pages/HowToUse'
import Profil from './pages/profil/profil'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeProvider } from './Context/ThemeContext.jsx'
// import AppDae from './pages/appDae'

// import RegionList from './components/appDAE/RegionList'
// import DaeList from './components/appDAE/DaeList'
import ErrorPage404 from './pages/errorPage404'
// import { useEffect, useState } from 'react'
// import useFetchDAE from './hooks/useFetchDAE'
// import Dae from './components/appDAE/Dae'
// import SearchDae from './components/appDAE/SearchDae'
// import FormDae from './components/appDAE/FormDae'

import DaeRender from './components/DaeRender'
import AppSearchDae from './pages/appSearch'

function App() {
  // const { data, isLoadingDAE } = useFetchDAE()

  // const [isLoading, setIsLoading] = useState(isLoadingDAE)

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <HomePage />,
  //   },
  //   {
  //     path: '/searchDAE',
  //     element: <AppSearchDae />,
  //   },
  //   {
  //     path: '/info',
  //     element: <HowToUse />,
  //   },

  //   {
  //     path: '/auth',
  //     element: <Authentification />,
  //   },
  //   {
  //     path: '/profil',
  //     element: (
  //       <Protected>
  //         <Profil />
  //       </Protected>
  //     ),
  //   },
  //   {
  //     path: '/sign-up',
  //     element: <SignUp />,
  //   },
  //   {
  //     path: '/sign-in',
  //     element: <SignIn />,
  //   },
  //   {
  //     path: '*',
  //     element: <ErrorPage404 />,
  //   },
  //   // {
  //   //   path: '/app',
  //   //   element: (
  //   //     <Protected>
  //   //       {' '}
  //   //       <AppDae />{' '}
  //   //     </Protected>
  //   //   ),
  //   //   children: [
  //   //     {
  //   //       index: true,
  //   //       element: <Navigate to="/app/daeList" replace />,
  //   //     },
  //   //     {
  //   //       path: 'daeList',
  //   //       // element: <DaeList daeList={datasliced} isLoading={isLoading} />,
  //   //       element: <DaeList daeList={data} isLoading={isLoading} />,
  //   //     },
  //   //     {
  //   //       path: 'daeList/:gid',
  //   //       element: <Dae />,
  //   //     },
  //   //     {
  //   //       path: 'regions',
  //   //       element: <RegionList />,
  //   //     },
  //   //     {
  //   //       path: 'search',
  //   //       element: <SearchDae />,
  //   //     },
  //   //     {
  //   //       path: 'formdae',
  //   //       element: <FormDae />,
  //   //     },
  //   //   ],
  //   // },
  // ])

  return (
    <ThemeProvider>
      <AuthContext>
        {/* <Navbar />
        <RouterProvider router={router} />
        <Footer /> */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/listeDAE"
              element={
                <Protected>
                  <DaeRender />
                </Protected>
              }
            />
            <Route path="/guide" element={<HowToUse />} />
            <Route path="/auth" element={<Authentification />} />
            <Route
              path="/profil"
              element={
                <Protected>
                  <Profil />
                </Protected>
              }
            />
            <Route path="*" element={<ErrorPage404 />} />
            <Route path="/rechercheDAE" element={<AppSearchDae />} />
            {/* <Route path="/app" element={#} /> */}
          </Routes>
          <Footer />
        </Router>
      </AuthContext>
    </ThemeProvider>
  )
}

export default App
