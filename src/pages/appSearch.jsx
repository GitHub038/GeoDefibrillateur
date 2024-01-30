import React, { useEffect, useState } from 'react'
import LocationMarker from '@/components/appDAE/LocationMarker'
import { useFetchData } from '@/hooks/useFetchData'
import { ENDPOINT } from '@/utils/constants'
import { getDocsCustom } from '@/utils/firebaseApi'
import { Icon } from 'leaflet'
import { Loader2 } from 'lucide-react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import 'leaflet/dist/leaflet.css'
import { where } from 'firebase/firestore/lite'

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

const AppSearchDae = () => {
  const { data, status, error, execute } = useFetchData()

  const [dae, setDae] = useState()

  const [positions, setPositions] = useState([])

  const initialQuery = getDocsCustom(
    ENDPOINT,
    where('c_etat_fonct', '==', 'En fonctionnement'),
  )

  //   useEffect(() => {
  //     /** Tous les DAE **/

  //     execute(getDocsCustom(ENDPOINT))
  //   }, [execute])

  useEffect(() => {
    /** Tous les DAE **/
    execute(initialQuery)
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
        const {
          c_lat_coor1,
          c_long_coor1,
          c_nom,
          c_etat_valid,
          c_adr_num,
          c_adr_voie,
          c_com_cp,
          c_disp_j,
        } = dae1.data()
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
          <div className="flex flex-row md:flex-col h-screen mt-20 m-2  overscroll-none h-[calc(100vh_-_4.8rem) relative">
            <div className="bg-slate-700 h-full rounded-lg items-center ">
              <p>test</p>
            </div>
            <div className=" h-full w-4/6 border-4 absolute">
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
          </div>
        )

      default:
        return <>{status}</>
    }
  }

  return <>{DaeListResult()}</>
}

export default AppSearchDae
