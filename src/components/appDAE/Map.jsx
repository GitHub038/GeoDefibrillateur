import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MapContain from './MapContain'
import { Icon } from 'leaflet'

const Map = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  const id = searchParams.get('gid')

  const markers = [
    {
      geocode: { lat, lng },
      popUp: `hello, je suis le DAE ${id}`,
    },
    {
      geocode: [48.86, 2.3522],
      popUp: 'Hello, je suis le DAE test 1',
    },
    {
      geocode: [48.85, 2.3522],
      popUp: 'Hello, je suis le DAE test 2',
    },
    {
      geocode: [48.855, 2.34],
      popUp: 'Hello, je suis le DAE test 3',
    },
    {
      geocode: [47.24, 0.68],
      popUp: 'Hello, je suis le DAE test 2',
    },
    {
      geocode: [47.9, 1.9],
      popUp: 'Hello, je suis le DAE test 3',
    },
  ]

  const customsIcon = new Icon({
    iconUrl: '/Logo.svg',
    iconSize: [38, 48],
  })

  return (
    <div
      className="flex-1 h-full bg-[#42484d] relative"
      onClick={() => navigate('formdae')}
    >
      <div>
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
      <div className="h-full border-4">
        <MapContain markers={markers} icon={customsIcon} />
        {/* <MapContain lat={lat} lng={lng} /> */}
      </div>
    </div>
  )
}

export default Map
