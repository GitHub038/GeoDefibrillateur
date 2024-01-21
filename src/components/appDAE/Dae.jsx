import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Dae = () => {
  const { gid } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  console.log(lat)

  return (
    <div>
      <h4>DAE ID : {gid}</h4>
      <p>
        lat: {lat}, lng: {lng}
        {/* lat: {c_lat_coor1}, lng: {c_long_coor1} */}
      </p>
    </div>
  )
}

export default Dae
