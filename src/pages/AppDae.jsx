import Map from '@/components/appDAE/Map'
import Sidebar from '@/components/appDAE/Sidebar'
import React from 'react'

const AppDae = () => {
  return (
    <div className="h-screen mt-20 p-6 flex relative overscroll-none">
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppDae
