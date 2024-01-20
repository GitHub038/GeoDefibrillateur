import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <nav className="mt-4 mb-2">
      <ul className="list-none flex rounded-lg gap-2">
        <li className="block text-inherit no-underline uppercase text-[1.2rem] font-bold py-2 px-8 rounded-md bg-[#242a2e]">
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li className="block text-inherit no-underline uppercase text-[1.2rem] font-bold py-2 px-8 rounded-md bg-[#242a2e]">
          <NavLink to="regions">Regions</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
