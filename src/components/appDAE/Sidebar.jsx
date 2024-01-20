import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNav from './AppNav'

const Sidebar = () => {
  return (
    <div className="bg-slate-700 rounded-lg flex flex-col items-center p-12 pt-12 pb-14 h-[calc(100vh_-_4.8rem)]">
      <AppNav />
      <Outlet />
      <footer className="mt-auto">
        <p className="text-[1.2rem] text-[#00c46a]">
          &copy; Copyright {new Date().getFullYear()} by GeoDéfibrilateurs
        </p>
      </footer>
    </div>
  )
}

export default Sidebar
