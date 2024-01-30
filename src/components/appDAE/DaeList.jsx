import { Loader2 } from 'lucide-react'
import React from 'react'
import DaeItem from './DaeItem'

const DaeList = ({ daeList, isLoading }) => {
  if (isLoading) {
    return <Loader2 className="m-auto" />
  }

  // if (!daeList.length) {
  //   return (
  //     <Message message="Add your first DAE by clicking on a DAE on the map" />
  //   )
  // }

  return (
    <ul className="w-full h-[65vh] list-none overflow-y-scroll overflow-x-hidden flex flex-col gap-[1.4rem]">
      {daeList?.map((dae) => (
        <DaeItem key={dae.gid} dae={dae} />
      ))}
    </ul>
  )
}

export default DaeList
