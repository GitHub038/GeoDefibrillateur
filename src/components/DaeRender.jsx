import { getAuth, signOut } from 'firebase/auth'
import { Loader2 } from 'lucide-react'
import useFetchDAE from '../hooks/useFetchDAE'
import { Button } from './ui/button'

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

      {/* <div className="mb-6 text-center text-3xl underline decoration-pink-500 ">
        Nombre de DAE : {data.length}
      </div> */}
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
  const auth = getAuth()
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }
  const { data, isLoading, error } = useFetchDAE()
  console.log('test')
  console.log(data)
  return (
    <>
      <Button onClick={() => handleSignOut()}>Log out</Button>
      {isLoading && <Loader />}
      {!isLoading && !error && <DAEList data={data} />}
      {error && <ErrorMessage message={error} />}
    </>
  )
}

export default DaeRender
