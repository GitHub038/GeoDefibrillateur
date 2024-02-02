import {
  // Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
  // createBrowserRouter,
} from 'react-router-dom'

// import { RouterProvider } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import Protected from './routes/Protected'
<<<<<<< HEAD
import Authentification from './pages/Authentification'
=======
import Authentification from './pages/authentification'
>>>>>>> 56f9c2041c96f190f801dce06e3a74a2aa55eb54
// import DaeRender from './components/DaeRender'
import HomePage from './pages/HomePage'
import HowToUse from './pages/HowToUse'
import Profil from './pages/profil/Profil'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
// import AppDae from './pages/appDae'

// import RegionList from './components/appDAE/RegionList'
// import DaeList from './components/appDAE/DaeList'
import ErrorPage404 from './pages/ErrorPage404'
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
