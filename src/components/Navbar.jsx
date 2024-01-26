import React from 'react'
import { CircleUserRound } from 'lucide-react'
import { NavbarMenu } from './NavbarMenu.jsx'
import { classNames } from '../utils/helpers.js'
import { ToggleTheme } from './ToggleTheme.jsx'
import {
  MENU_1,
  MENU_2,
  MENU_3,
  MENU_4,
  MENU_5,
  MENU_6,
} from '@/utils/constants.js'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const currentUrl = location.pathname
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })
  React.useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop >= 100) {
        setAppBarStyle({
          background: '#111111bf',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      } else {
        setAppBarStyle({
          background: 'transparent',
          transition: 'background .5s ease-out',
          boxShadow: 'none',
        })
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const [user, setUser] = React.useState(null)
  const auth = getAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  const LoginToggle = () => {
    if (!user)
      return (
        <>
          <div className="lg:hidden">{MENU_3}</div>
          <CircleUserRound className="hidden lg:inline-block h-5 w-auto" />
        </>
      )
    else {
      return (
        <>
          <div className="lg:hidden" onClick={handleSignOut}>
            {MENU_4}
          </div>
          <CircleUserRound
            className="hidden lg:inline-block lg:h-5 lg:w-auto"
            onClick={handleSignOut}
          />{' '}
        </>
      )
    }
  }
  const navigation = [
    {
      id: 1,
      name: user ? MENU_5 : false,
      href: '/profil',
      current: currentUrl === '/profil' ? true : false,
    },
    {
      id: 2,
      name: MENU_1,
      href: '/rechercheDAE',
      current: currentUrl === '/rechercheDAE' ? true : false,
    },
    {
      id: 3,
      name: MENU_2,
      href: '/guide',
      current: currentUrl === '/guide' ? true : false,
    },
    {
      id: 4,
      name: user ? MENU_6 : false,
      href: '/listeDAE',
      current: currentUrl === '/listeDAE' ? true : false,
    },
    {
      id: 5,
      name: <LoginToggle />,
      href: '/auth',
      current: currentUrl === '/auth' ? true : false,
    },
  ]

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [auth, user])

  return (
    <nav>
      <div
        className="fixed top-0 w-full z-50 min-w-[100vw]"
        style={currentUrl === '/' ? appBarStyle : { background: '#111111bf' }}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex lg:flex-1 items-center justify-between lg:gap-1 lg:items-stretch">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" className="flex flex-row">
                  <img
                    className="h-8 w-auto cursor-pointer"
                    src="/GeoDefibrillateurs.svg"
                    alt="Logo GeoDefibrillateurs"
                  />
                  <div className="cursor-pointer whitespace-nowrap drop-shadow px-1 font-extrabold italic text-lg text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                    GeoDéfibrillateurs
                  </div>
                </Link>
              </div>
              <div className="hidden lg:ml-4 lg:flex">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.id}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-primary text-white dark:bg-[#d8e4dd] dark:text-black'
                          : 'text-white text-shadow-lg shadow-gray-900 font-extrabold hover:bg-secondary hover:text-black hover:shadow-gray-100 dark:hover:bg-[#d8e4dd]',
                        item.name === false
                          ? 'hidden'
                          : 'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:ml-4 lg:block">
                  <ToggleTheme />
                </div>
              </div>
            </div>
            <NavbarMenu navigation={navigation} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Navbar }
