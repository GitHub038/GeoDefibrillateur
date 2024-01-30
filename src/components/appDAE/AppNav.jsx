import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className="mt-4 mb-2">
      <ul className="list-none flex rounded-lg gap-2 bg-[#42484d] ">
        <li
          onClick={() => setIsActive(!isActive)}
          className={`block text-inherit no-underline uppercase text-[1.2rem] font-bold py-2 px-8 rounded-md
            ${isActive ? 'bg-[#242a2e] border-2 border-[#ffb545]' : ''}`}
        >
          <NavLink to="daeList">Liste DAE</NavLink>
        </li>
        <li
          onClick={() => setIsActive(!isActive)}
          className={`block text-inherit no-underline uppercase text-[1.2rem] font-bold py-2 px-8 rounded-md
            ${!isActive ? 'bg-[#242a2e] border-2 border-[#ffb545]' : ''}`}
        >
          <NavLink to="regions">Regions</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
