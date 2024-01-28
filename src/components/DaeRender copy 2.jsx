import React from 'react'
import Map from './appDAE/Map'
import SearchDae from './appDAE/SearchDae'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Icon } from 'leaflet'

import 'leaflet/dist/leaflet.css'

const DaeRender = () => {
  // const markers = [
  //   {
  //     geocode: [48.855, 2.34],
  //     popUp: 'Hello, je suis le DAE test 3',
  //   },
  //   {
  //     geocode: [47.24, 0.68],
  //     popUp: 'Hello, je suis le DAE test 2',
  //   },
  //   {
  //     geocode: [47.9, 1.9],
  //     popUp: 'Hello, je suis le DAE test 3',
  //   },
  // ]

  // const customsIcon = new Icon({
  //   iconUrl: '/Logo.svg',
  //   iconSize: [38, 48],
  // })

  const position = [51.505, -0.09]

  return (
    <div className="h-full w-full border-4 mt-28">
      {/* <Map /> */}
      {/* <MapContainer
        center={{ lat: 46.7111, lng: 1.7191 }}
        zoom={6.5}
        scrollWheelZoom={false}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            // console.log(marker),
            // console.log(marker[0].geocode),
            // console.log(marker[0].popUp),
            <Marker position={marker.geocode} icon={customsIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer> */}
      <div className="w-full h-full absolute">
        <p>Hello</p>
        <MapContainer
          className="w-full h-full"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <p>Hello</p>
      </div>
    </div>
  )
}

export default DaeRender
