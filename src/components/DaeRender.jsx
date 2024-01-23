import React, { useEffect, useState } from 'react'
import { where } from 'firebase/firestore/lite'
import { Loader2 } from 'lucide-react'
import { useFetchData } from '../hooks/hooks'
import { getDocsCustom } from '../utils/firebaseApi'

//Mini component to display loader
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

//Mini component to display DAE_List
const DAEList = ({ data }) => {
  return (
    <>
      <p className="bg-secondary text-4xl items-center w-full">Liste des DAE</p>

      <div className="grid grid-cols-2">
        {data?.map((entry) => (
          <div key={entry.gid} className="m-6">
            <h3 className="text-2xl "> Name: {entry.c_nom}</h3>
            <p>
              Address: {entry.c_adr_num} {entry.c_adr_voie}, {entry.c_com_cp}{' '}
              {entry.c_com_nom}
            </p>
            <p>Code postal: {entry.c_com_cp}</p>
            <p>Lat : {entry.c_lat_coor1}</p> <p>Long : {entry.c_long_coor1}</p>
            <p> Disponibilité : {entry.c_disp_j}</p>
          </div>
        ))}
      </div>
    </>
  )
}
const DaeRender = () => {
  const { data, status, error, execute } = useFetchData()

  const [dae, setDae] = useState()

  useEffect(() => {
    // Exemple de requetes

    /** Tout les DAE **/
    //execute(getDocsCustom('/entries'))

    /** Tout les DAE d'une Ville **/
    //execute(
    //  getDocsCustom('/entries', where('c_com_nom', '==', 'Condé-en-Normandie')),
    //)

    /** Un DAE avec une longitude et une latitude **/
    execute(
      getDocsCustom(
        '/entries',
        where('c_lat_coor1', '==', 48.8509),
        where('c_long_coor1', '==', -0.541597),
      ),
    )
  }, [execute])

  const DaeListResult = () => {
    switch (status) {
      case 'failure':
        return <ErrorMessage message={error} />
      case 'loading':
        return <Loader />
      case 'done':
        return <DAEList data={dae} />
      default:
        return <>{status}</>
    }
  }

  useEffect(() => {
    setDae(
      data && data.docs
        ? data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        : [],
    )
  }, [data])
  return <>{DaeListResult()}</>
}

export default DaeRender
