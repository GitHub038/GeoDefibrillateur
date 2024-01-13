import { Navbar } from '../components/Navbar.jsx'
import { HomePageHeader } from '../components/HomePageHeader.jsx'
import { HomePageContent } from '../components/HomePageContent.jsx'
import { Footer } from '../components/Footer.jsx'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HomePageHeader />
      <HomePageContent />
      <Footer />
    </div>
  )
}
