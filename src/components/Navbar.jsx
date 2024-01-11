import React from 'react'
import { CircleUserRound } from 'lucide-react'
import { NavbarMenu } from './NavbarMenu.jsx'
import { classNames } from '../utils/helpers.js'

const navigation = [
  { name: 'Rechercher un DAE', href: '/searchDAE', current: false },
  { name: 'Info & FAQ', href: '/info', current: false },
  {
    name: (
      <>
        <div className="sm:hidden">Se connecter</div>
        <CircleUserRound className="hidden sm:inline-block h-5 w-auto" />
      </>
    ),
    href: '/auth',
    current: false,
  },
]

function Navbar() {
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
        style={appBarStyle}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex sm:flex-1 items-center justify-between sm:gap-1 sm:items-stretch">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto cursor-pointer"
                  src="/GeoDefibrillateurs.svg"
                  alt="Logo GeoDefibrillateurs"
                  href="/"
                />
                <div className="cursor-default whitespace-nowrap drop-shadow px-1 font-extrabold italic text-lg text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  GeoDéfibrillateurs
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-primary text-white'
                          : 'text-white text-shadow-lg shadow-gray-900 font-extrabold hover:bg-secondary hover:text-black hover:shadow-gray-100',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
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
