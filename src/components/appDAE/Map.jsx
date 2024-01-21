import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Map = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  // const c_lat_coor1 = searchParams.get('c_lat_coor1')
  // const c_long_coor1 = searchParams.get('c_long_coor1')

  return (
    <div
      className="flex-1 h-full bg-[#42484d] relative"
      onClick={() => navigate('formdae')}
    >
      <h3>Map</h3>
      <div>
        lat: {lat}, lng: {lng}
        {/* lat: {c_lat_coor1}, lng: {c_lat_coor1} */}
      </div>
      <button
        className="button"
        onClick={() => setSearchParams({ lat: 50, lng: 50 })}
      >
        Change position
      </button>
    </div>
  )
}

export default Map
