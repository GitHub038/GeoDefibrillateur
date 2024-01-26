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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage404 from './pages/errorPage404.jsx'
import AppDae from './pages/AppDae'

function App() {
  return (
    <ThemeProvider>
      <AuthContext>
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
            <Route path="/rechercheDAE" element={<AppDae />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContext>
    </ThemeProvider>
  )
}

export default App
