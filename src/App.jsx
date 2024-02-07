import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import Protected from './routes/Protected'
import Authentification from './pages/Authentification'
import HomePage from './pages/HomePage'
import HowToUse from './pages/HowToUse'
import Profil from './pages/profil/Profil'
import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import ErrorPage404 from './pages/ErrorPage404'
import DaeRender from './components/DaeRender'
import AppSearchDae from './pages/AppSearch'

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
            <Route path="/rechercheDAE" element={<AppSearchDae />} />
          </Routes>
          <Footer />
        </Router>
      </AuthContext>
    </ThemeProvider>
  )
}

export default App
