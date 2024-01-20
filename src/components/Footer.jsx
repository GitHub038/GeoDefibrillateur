// import { MENU_1, MENU_2, MENU_3, MENU_4 } from '@/utils/constants.js'
import { MENU_1 } from '@/utils/constants.js'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center justify-center	sm:justify-normal mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              className="h-8 w-auto cursor-pointer"
              src="/GeoDefibrillateurs.svg"
              alt="Logo GeoDefibrillateurs"
            />
            <span className="self-center cursor-pointer text-xl sm:text-2xl drop-shadow px-1 font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              GeoDéfibrillateurs
            </span>
          </a>
          <ul className="flex flex-wrap flex-col sm:flex-row items-center mb-6 sm:mb-0 text-sm font-medium text-gray-500  dark:text-gray-400">
            <li>
              <a href="/searchDAE" className="hover:underline me-6 md:me-6">
                {MENU_1}
              </a>
            </li>
            {/* <li>
              <a href="/info" className="hover:underline me-4 md:me-6">
                {MENU_2}
              </a>
            </li>
            <li>
              <a href="/info" className="hover:underline me-4 md:me-6">
                {MENU_3}
              </a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          © 2024{' '}
          <a href="/" className="hover:underline">
            GeoDéfibrillateurs™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export { Footer }
