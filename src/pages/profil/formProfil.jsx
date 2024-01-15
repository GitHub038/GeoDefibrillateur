import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getAuth, updateProfile } from '@firebase/auth'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'

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
  alert('Uploaded Avatar_file!')
}

const FormProfil = () => {
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
      setFirstName(user.displayName.split(' ')[0])
      setLastName(user.displayName.split(' ')[1])
    }
  }, [user])

  const onSubmit = (e) => {
    // e.preventDefault()
    if (firstName && lastName) {
      upload(photo, currentUser, setLoading)

      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(() => {
          alert('Profile updated!')
        })
        .catch((error) => {
          console.log(error)
        })
    }
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
      <form
        disabled={loading || !photo || !firstName || !lastName}
        onSubmit={onSubmit}
        className="flex flex-col gap-2 justify-evenly w-5/6"
      >
        <div className="flex flex-col gap-2 md:flex-row justify-center border border-gray-300">
          <div className="flex flex-col gap-2 w-5/6 justify-evenly">
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
          <div className="flex flex-col gap-2">
            <Avatar className="w-32 h-32 justify-center self-center">
              <AvatarImage src={photoURL} alt="Your profile picture" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Input type="file" onChange={handleChange} />
          </div>
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default FormProfil
