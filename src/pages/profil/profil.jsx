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
      <div className="flex flex-col w-screen justify-center items-center gap-6">
        <h1 className="text-3xl mt-10 text-center">Modifier votre profil</h1>

        <FormProfil />
      </div>
    </div>
  )
}

export default Profil
