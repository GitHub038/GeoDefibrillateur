import { Button } from '@/components/ui/button'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'

import FormProfil from './formProfil'

const Profil = () => {
  // const [user, setUser] = useState(null)
  const auth = getAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button onClick={() => handleSignOut()}>Log out</Button>
      <div className="flex flex-col w-screen justify-center items-center">
        <h1 className="text-3xl text-center">Edit Your Profile</h1>
        <FormProfil />
      </div>
    </div>
  )
}

export default Profil
