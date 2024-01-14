import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
import { createBrowserRouter } from 'react-router-dom'
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
