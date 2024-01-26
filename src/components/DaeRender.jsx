import React, { useEffect, useState } from 'react'
import { where } from 'firebase/firestore/lite'
import { Loader2 } from 'lucide-react'
import { useFetchData } from '../hooks/useFetchData'
import { getDocsCustom } from '../utils/firebaseApi'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

//Mini component to display loader
const Loader = () => {
  return (
    <section className="bg-secondary h-screen">
      <div className="flex h-screen w-full items-center justify-center bg-secondary">
        <Loader2 size={'64px'} className="animate-spin" />
      </div>
    </section>
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
    <section className="bg-secondary h-full">
      <div className="h-full w-full mx-auto flex justify-center items-center flex-col pt-20 pb-0 sm:pt-32 sm:pb-32 gap-6 px-4 sm:px-8">
        <h1 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:text-4xl">
          Liste des DAE
        </h1>
        <div className="grid lg:grid-cols-2 gap-4">
          {data?.map((entry) => (
            <Card className="w-[350px] md:w-[450px]">
              <CardHeader key={entry.gid}>
                <CardTitle className="md:text-2xl text-lg font-semibold	text-primary text-center">
                  {entry.c_nom}
                </CardTitle>
                <Separator className="my-4" />
                <CardContent>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <p>
                        <span className="font-bold">Rue :</span>{' '}
                        {entry.c_adr_num} {entry.c_adr_voie}
                      </p>
                      <p>
                        <span className="font-bold">Code postal :</span>{' '}
                        {entry.c_com_cp}
                      </p>
                      <p>
                        <span className="font-bold">Ville :</span>{' '}
                        {entry.c_com_nom}
                      </p>
                      {entry.c_disp_j.replace(/[{}"]/g, '') !==
                        'non renseigné' && (
                        <p className="truncate max-w-[14rem]">
                          <span className="font-bold">Disponibilité :</span>{' '}
                          {entry.c_disp_j.replace(/[{}"]/g, '')}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
const DaeRender = () => {
  const { data, status, error, execute } = useFetchData()

  const [dae, setDae] = useState()

  useEffect(() => {
    // Exemple de requetes
    /** Tout les DAE **/
    // execute(getDocsCustom('/entries'))
    /** Tout les DAE d'une Ville **/
    //execute(
    //  getDocsCustom('/entries', where('c_com_nom', '==', 'Condé-en-Normandie')),
    //)
    /** Un DAE avec une longitude et une latitude **/
    //   execute(
    //     getDocsCustom(
    //       '/entries',
    //       where('c_lat_coor1', '==', 48.8509),
    //       where('c_long_coor1', '==', -0.541597),
    //     ),
    //   )
    execute(
      getDocsCustom(
        '/entries',
        where('c_etat_fonct', '==', 'En fonctionnement'),
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
