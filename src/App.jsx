import SignIn from './Routes/SignIn'
import SignUp from './Routes/SignUp'
import Home from './Routes/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
import Protected from './Routes/Protected'
import Authentification from './pages/authentification'
import DaeRender from './components/DaeRender'

// TODO : Ici mettre les routes de notre projet

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Protected>
          {/* <Home /> */}
          <DaeRender />
        </Protected>
      ),
    },
    {
      path: '/authentification',
      element: <Authentification />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
  ])
  return (
    // <>
    //   <DaeRender />
    // </>
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
