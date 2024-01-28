import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useFetchData } from '../hooks/useFetchData'
import { getAllData } from '../utils/firebaseApi'

import { Icon } from 'leaflet'

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

import MarkerClusterGroup from 'react-leaflet-cluster'
import LocationMarker from './appDAE/LocationMarker'

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-secondary">
      <h1 className="text-3xl font-bold">Chargement en cours ...</h1>
      <Loader2 size={'64px'} className="animate-spin" />
    </div>
  )
}

//Mini component to display error
const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <span>❌{message}</span>
    </div>
  )
}

const customsIcon = new Icon({
  iconUrl: '/Logo.svg',
  iconSize: [38, 48],
})

const DaeRender = () => {
  const { data, status, error, execute } = useFetchData()

  const [dae, setDae] = useState()

  const [positions, setPositions] = useState([])

  useEffect(() => {
    /** Tous les DAE **/
    execute(getAllData('/entries'))
  }, [execute])

  useEffect(() => {
    setDae(
      data && data.docs
        ? data.docs.map((doc) => ({
            id: doc.gid,
            ...doc.data(),
          }))
        : [],
    )
  }, [data])

  useEffect(() => {
    if (data && data.docs) {
      const newPositions = data.docs.map((dae1) => {
        const { c_lat_coor1, c_long_coor1, c_nom } = dae1.data()
        return [
          {
            geocode: [c_lat_coor1, c_long_coor1],
            popUp: `Hello, je suis le DAE : ${c_nom}`,
          },
        ]
      })

      setPositions((prevPositions) => [...newPositions, ...prevPositions])
    }
  }, [data])

  const DaeListResult = () => {
    switch (status) {
      case 'failure':
        return <ErrorMessage message={error} />
      case 'loading':
        return <Loader />
      case 'done':
        return (
          <div className="mt-20 mb-20 h-full w-full border-4 absolute">
            <MapContainer
              center={{ lat: 46.7111, lng: 1.7191 }}
              zoom={6.5}
              scrollWheelZoom={true}
              style={{ height: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker />

              <MarkerClusterGroup>
                {positions.map((marker, index) => (
                  <Marker
                    position={marker[0].geocode}
                    icon={customsIcon}
                    key={index}
                  >
                    <Popup>{marker[0].popUp}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
        )

      default:
        return <>{status}</>
    }
  }

  return <>{DaeListResult()}</>
}

export default DaeRender
