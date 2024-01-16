import React from 'react'
import { CircleUserRound } from 'lucide-react'
import { NavbarMenu } from './NavbarMenu.jsx'
import { classNames } from '../utils/helpers.js'
import { ToggleTheme } from './ToggleTheme.jsx'
import { MENU_1, MENU_2, MENU_3, MENU_4 } from '@/utils/constants.js'
import { getAuth, signOut } from 'firebase/auth'

const auth = getAuth()

const handleSignOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}
const LoginToggle = () => {
  const user = auth?.currentUser?.displayName

  if (!user)
    return (
      <>
        <div className="sm:hidden">{MENU_3}</div>
        <CircleUserRound className="hidden sm:inline-block h-5 w-auto" />
      </>
    )
  else {
    return (
      <>
        <div className="sm:hidden" onClick={handleSignOut}>
          {MENU_4}
        </div>
        <CircleUserRound
          className="hidden sm:inline-block h-5 w-auto"
          onClick={handleSignOut}
        />
      </>
    )
  }
}

const navigation = [
  { name: MENU_1, href: '/searchDAE', current: false },
  { name: MENU_2, href: '/info', current: false },

  {
    name: (
      <>
        <LoginToggle />
      </>
    ),

    href: '/auth',
    current: false,
  },
]

function Navbar() {
  const currentPath = window.location.pathname
  const [appBarStyle, setAppBarStyle] = React.useState({
    background: 'transparent',
    boxShadow: 'none',
  })
  React.useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop >= 100) {
        setAppBarStyle({
          background: '#111',
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
  return (
    <nav>
      <div
        className="fixed top-0 w-full z-50 min-w-[100vw]"
        style={currentPath === '/' ? appBarStyle : { background: '#111111bf' }}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex sm:flex-1 items-center justify-between sm:gap-1 sm:items-stretch">
              <div className="flex flex-shrink-0 items-center">
                <a href="/">
                  <img
                    className="h-8 w-auto cursor-pointer"
                    src="/GeoDefibrillateurs.svg"
                    alt="Logo GeoDefibrillateurs"
                    href="/"
                  />
                </a>
                <div className="cursor-default whitespace-nowrap drop-shadow px-1 font-extrabold italic text-lg text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  GeoDéfibrillateurs
                </div>
              </div>
              <div className="hidden sm:ml-4 sm:flex">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-primary text-white dark:bg-[#d8e4dd] dark:text-black'
                          : 'text-white text-shadow-lg shadow-gray-900 font-extrabold hover:bg-secondary hover:text-black hover:shadow-gray-100 dark:hover:bg-[#d8e4dd]',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden sm:ml-4 sm:block">
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
