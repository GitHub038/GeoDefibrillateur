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
      </p>
      {/* <p>ID : {gid}</p> */}
    </div>
  )
}

export default Dae
