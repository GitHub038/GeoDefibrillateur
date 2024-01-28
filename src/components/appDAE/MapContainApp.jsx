import React, { useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { divIcon, point } from 'leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster'
import { Key } from 'lucide-react'
import LocationMarker from './LocationMarker'

const MapContainApp = ({ markers, icon }) => {
  return (
    <>
      {' '}
      <MapContainer
        center={{ lat: 46.7111, lng: 1.7191 }}
        zoom={6.5}
        scrollWheelZoom={false}
        style={{ height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
        <MarkerClusterGroup>
          {markers.map((marker, index) => (
            <Marker position={marker?.geocode} icon={icon} key={index}>
              <Popup>{marker?.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
      <button onClick={() => LocationMarker()}>Geolocaliser</button>
    </>
  )
}

export default MapContainApp
