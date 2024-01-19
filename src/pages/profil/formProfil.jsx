// import { onAuthStateChanged } from 'firebase/auth'
// import { useEffect, useState } from 'react'
import { useState } from 'react'
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { getAuth, updateProfile } from '@firebase/auth'
import { storage } from '../../firebase/init_Firebase.js'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

//Initialize
const auth = getAuth()
// const storage = getStorage()

// Custom Hook
// export function useAuth() {
//   const [currentUser, setCurrentUser] = useState()

//   useEffect(() => {
//     const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
//     return unsub
//   }, [])

//   return currentUser
// }

// Storage
// export async function upload(file, currentUser, setLoading) {
//   const fileRef = ref(storage, currentUser.uid + '.png')

//   setLoading(true)

//   // const snapshot = await uploadBytes(fileRef, file)
//   const photoURL = await getDownloadURL(fileRef)

//   updateProfile(currentUser, { photoURL })

//   setLoading(false)
// }

const FormProfil = () => {
  const { toast } = useToast()

  // const currentUser = useAuth()
  const user = auth.currentUser
  const userImage = user.photoURL
  const email = user.email
  const nameParts = user.displayName.split(' ')
  const userFirstName = nameParts.slice(0, -1).join(' ')
  const userLastName = nameParts.slice(-1)[0]
  const [firstName, setFirstName] = useState(userFirstName)
  const [lastName, setLastName] = useState(userLastName)
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(userImage)
  const [disabled, setDisabled] = useState(true)

  // const [loading, setLoading] = useState(false)
  // const [photoURL, setPhotoURL] = useState(
  //   'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
  // )

  // useEffect(() => {
  //   if (!user.displayName) {
  //     setFirstName('')
  //     setLastName('')
  //   } else {
  //     const nameParts = user.displayName.split(' ')
  //     setFirstName(nameParts.slice(0, -1).join(' '))
  //     setLastName(nameParts.slice(-1)[0])
  //   }
  // }, [user])

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
    } else {
      toast({
        variant: 'destructive',
        title: '⚠️ Champs vides',
        description: 'Veuillez remplir les champs',
      })
    }
  }
  // const onSubmitPhoto = async (e) => {
  //   // console.log(e)
  //   // e.preventDefault()
  //   await upload(photo, user, setLoading)
  //   !photo &&
  //     toast({
  //       title: '🤷🏾 Photo !!!',
  //       description: 'Veuillez charger une photo',
  //     })
  //   photo &&
  //     toast({
  //       title: '🎉 Bravo',
  //       description: 'Votre photo de profil est mise à jour',
  //     })
  // }
  function handleImageChange(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
      setDisabled(false)
    }
  }

  const handleSubmit = async () => {
    const imageRef = ref(storage, 'avatar/' + user.uid + '.png')
    await uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url)
          })
          .catch((error) => {
            console.log(error.message, 'error getting the image url')
          })
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
    const result = await getDownloadURL(imageRef)
    await updateProfile(user, {
      photoURL: `${result}`,
    })
      .then(() => {
        toast({
          title: '🎉 Bravo',
          description: 'Votre avatar a été mis à jour',
        })
      })
      .catch((error) => {
        console.log(error)
      })
    setDisabled(true)
    // updateProfile(user, {
    //   photoURL: `https://firebasestorage.googleapis.com/v0/b/${storage.bucket}/o/avatar%2F${user.uid}.png?alt=media`,
    // })
    //   .then(() => {
    //     toast({
    //       title: '🎉 Bravo',
    //       description: 'Votre profil est mise à jour',
    //     })
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  // useEffect(() => {
  //   if (user?.photoURL) {
  //     setPhotoURL(user.photoURL)
  //   }
  // }, [user])

  return (
    <div className="flex flex-col w-screen justify-center items-center gap-6">
      <h1 className="text-3xl mt-10 text-center">
        {`Modifier votre profil ${firstName}`}{' '}
      </h1>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-evenly  w-full md:w-5/6">
        <form
          onSubmit={onSubmitForm}
          className="flex flex-col gap-2 justify-evenly w-2/3"
        >
          <div className="flex flex-col gap-2 w-full">
            <div>
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénom"
              />
            </div>
            <div>
              <Label htmlFor="lastname">Nom</Label>
              <Input
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom"
              />
            </div>
            <div>
              <Label htmlFor="email" className="self-center">
                You email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                disabled
              />
            </div>
          </div>
          <Button
            disabled={firstName === userFirstName && lastName === userLastName}
            type="submit"
          >
            Submit
          </Button>
        </form>
        <div
          // disabled={loading && !photoURL}
          // onSubmit={async (e) => await onSubmitPhoto(e)}
          className="flex flex-col gap-2 w-full md:w-1/3"
        >
          <div className="flex flex-col  justify-center items-center w-full gap-2">
            <Avatar className="w-32 h-32 justify-center self-center">
              <AvatarImage src={url} alt="Your profile picture" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 justify-center self-center">
              <Label htmlFor="avatar">Avatar</Label>
              <Input type="file" onChange={handleImageChange} />
              <Button
                disabled={disabled}
                type="submit"
                className="self-center"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  )
}

export default FormProfil
