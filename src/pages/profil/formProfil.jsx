import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getAuth, updateProfile } from '@firebase/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

//Initialize
const auth = getAuth()
const storage = getStorage()

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
    return unsub
  }, [])

  return currentUser
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png')

  setLoading(true)

  const snapshot = await uploadBytes(fileRef, file)
  const photoURL = await getDownloadURL(fileRef)

  updateProfile(currentUser, { photoURL })

  setLoading(false)
}

const FormProfil = () => {
  const { toast } = useToast()

  const currentUser = useAuth()
  const user = auth.currentUser

  const email = user.email

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [photo, setPhoto] = useState(null)

  const [loading, setLoading] = useState(false)
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  )

  useEffect(() => {
    if (!user.displayName) {
      setFirstName('')
      setLastName('')
    } else {
      const nameParts = user.displayName.split(' ')
      setFirstName(nameParts.slice(0, -1).join(' '))
      setLastName(nameParts.slice(-1)[0])
    }
  }, [user])

  const onSubmitForm = (e) => {
    e.preventDefault()

    if (firstName || lastName) {
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(() => {
          toast({
            title: '🎉 Bravo',
            description: 'Votre profil est mise à jour',
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  const onSubmitPhoto = async (e) => {
    // console.log(e)
    // e.preventDefault()
    await upload(photo, currentUser, setLoading)
    !photo &&
      toast({
        title: '🤷🏾 Photo !!!',
        description: 'Veuillez charger une photo',
      })
    photo &&
      toast({
        title: '🎉 Bravo',
        description: 'Votre photo de profil est mise à jour',
      })
  }
  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL)
    }
  }, [currentUser])

  return (
    <div className="flex flex-col w-screen justify-center items-center gap-6">
      <h1 className="text-3xl mt-10 text-center">
        {`Modifier votre profil ${firstName}`}{' '}
      </h1>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-evenly  w-full md:w-5/6">
        <form
          disabled={(loading && !firstName) || !lastName}
          onSubmit={onSubmitForm}
          className="flex flex-col gap-2 justify-evenly w-2/3"
        >
          <div className="flex flex-col gap-2 w-full">
            <div>
              <Label>Prénom</Label>
              <Input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
              />
            </div>
            <div>
              <Label>Nom</Label>
              <Input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom"
              />
            </div>
            <div>
              <Label Label htmlFor="email" className="self-center">
                You email
              </Label>
              <Input type="email" value={email} placeholder="Email" disabled />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
        <form
          disabled={loading && !photoURL}
          onSubmit={async (e) => await onSubmitPhoto(e)}
          className="flex flex-col gap-2 w-full md:w-1/3"
        >
          <div className="flex flex-col  justify-center items-center w-full gap-2">
            <Avatar className="w-32 h-32 justify-center self-center">
              <AvatarImage src={photoURL} alt="Your profile picture" />
              <AvatarFallback>Photo</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 justify-center self-center">
              <Input type="file" onChange={handleChange} />
              <Button
                disabled={loading && !photo}
                variant="outline"
                type="submit"
                className="self-center"
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  )
}

export default FormProfil
