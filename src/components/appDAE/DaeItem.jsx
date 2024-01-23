import React from 'react'
import { Link } from 'react-router-dom'

const DaeItem = ({ dae }) => {
  const { c_com_cp, c_lat_coor1, c_long_coor1, gid } = dae
  return (
    <li>
      <Link
        className="m-auto flex items-center bg-[#42484d] rounded-lg p-4 pl-[calc(2rem+5px)] cursor-pointer text-inherit no-underline border-l-[5px] border-l-[#00c46a]"
        to={`${gid}?lat=${c_lat_coor1}&lng=${c_long_coor1}`}
      >
        <span className="">Code Postal : {c_com_cp}</span>
        {/* <div className="">{c_lat_coor1}</div> */}

        {/* <button className="">&times;</button> */}
      </Link>
    </li>
  )
}

export default DaeItem
