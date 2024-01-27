import { MENU_1, MENU_2, MENU_3, MENU_5, MENU_6 } from '@/utils/constants.js'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from '@firebase/auth'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const currentUrl = location.pathname
  const auth = getAuth()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => unsubscribe()
  }, [auth])

  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 lg:py-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <Link
            to="/"
            className="flex items-center justify-center	lg:justify-normal mb-4 lg:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="h-8 w-auto cursor-pointer"
              src="/GeoDefibrillateurs.svg"
              alt="Logo GeoDefibrillateurs"
            />
            <span className="self-center cursor-pointer text-xl lg:text-2xl drop-shadow px-1 font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              GeoDéfibrillateurs
            </span>
          </Link>
          <ul className="flex flex-wrap flex-col lg:flex-row items-center mb-6 lg:mb-0 text-sm font-medium text-gray-500  dark:text-gray-400">
            {user && (
              <>
                <li>
                  <Link
                    to="/profil"
                    className={`hover:underline me-4 md:me-6 ${
                      currentUrl === '/profil' ? 'underline' : ''
                    }`}
                  >
                    {MENU_5}
                  </Link>
                </li>
              </>
            )}
            <li>
              <Link
                to="/rechercheDAE"
                className={`hover:underline me-4 md:me-6 ${
                  currentUrl === '/rechercheDAE' ? 'underline' : ''
                }`}
              >
                {MENU_1}
              </Link>
            </li>
            <li>
              <Link
                to="/guide"
                className={`hover:underline me-4 md:me-6 ${
                  currentUrl === '/guide' ? 'underline' : ''
                }`}
              >
                {MENU_2}
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link
                    to="/auth"
                    className={`hover:underline me-4 md:me-6 ${
                      currentUrl === '/auth' ? 'underline' : ''
                    }`}
                  >
                    {MENU_3}
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link
                    to="/listeDAE"
                    className={`hover:underline me-4 md:me-6 ${
                      currentUrl === '/listeDAE' ? 'underline' : ''
                    }`}
                  >
                    {MENU_6}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 lg:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{' '}
          <Link to="/" className="hover:underline">
            GeoDéfibrillateurs™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export { Footer }
