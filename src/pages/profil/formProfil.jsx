// import { onAuthStateChanged } from 'firebase/auth'
// import { useEffect, useState } from 'react'
import { useState, useEffect } from 'react'
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CircleUserRound } from 'lucide-react'
import { KeyRound } from 'lucide-react'
import { Image } from 'lucide-react'
import { Unplug } from 'lucide-react'
import { Trash2 } from 'lucide-react'

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
  const nameParts = user.displayName ? user.displayName.split(' ') : []
  console.log(nameParts.length)
  const userFirstName = nameParts.slice(0, -1).join(' ')
  const userLastName = nameParts.slice(-1)[0]
  useEffect(() => {
    if (!nameParts.length) {
      toast({
        title: '👋 Première connexion ? ',
        description: 'Remplissez votre profil',
      })
    }
  }, [nameParts.length, toast])
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
    if (firstName && lastName) {
      updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      })
        .then(() => {
          toast({
            title: '🎉 Informations personnelles enregistrés',
            description: 'Votre profil a bien été mis à jour',
          })
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      toast({
        variant: 'destructive',
        title: '⚠️ Champ(s) non rempli(s)',
        description: 'Veuillez remplir tous les champs',
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
    console.log(imageRef)
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
          title: '🎉 Photo de profil enregistrée',
          description: 'Votre profil a bien été mis à jour',
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
    // <div className="flex flex-col w-screen justify-center items-center gap-6">
    //   <h1 className="text-3xl mt-10 text-center">
    //     {`Modifier votre profil ${firstName}`}{' '}
    //   </h1>
    //   <div className="flex flex-col md:flex-row gap-2 items-center justify-evenly  w-full md:w-5/6">
    <div className="bg-secondary h-full mt-[-40px]">
      <div className="h-full w-full mx-auto flex justify-center items-center flex-col pt-20 pb-0 sm:pt-32 sm:pb-32 gap-6 px-4 sm:px-8">
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle className="md:text-2xl text-lg font-semibold	text-primary text-center">
              👋 Bienvenue {firstName} sur votre compte !
            </CardTitle>
            <CardDescription className="md:text-lg text-sm text-center font-semibold">
              Ajouter / Modifier vos données en 1 clic !
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle>Photo de profil</CardTitle>
            <CardDescription>
              Ajouter / Modifier votre photo de profil en cliquant sur{' '}
              <span className="font-bold">Choisir un fichier</span>
            </CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-center sm:flex-row space-y-1.5 gap-4">
                <Avatar className="w-32 h-32 justify-start">
                  <AvatarImage src={url} alt="Your profile picture" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                  <div className="font-thin	text-xs">
                    Taille maximale : 10 Mo
                  </div>
                  <div className="font-thin	text-xs">Format : JPG, GIF, PNG</div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Input type="file" onChange={handleImageChange} />
            <Button disabled={disabled} onClick={handleSubmit}>
              <Image className="mr-2 h-4 w-4" />
              Ajouter / modifier
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle>Infos persos</CardTitle>
            <CardDescription>
              Ajouter / modifier vos informations personnelles en remplissant
              les champs <span className="font-bold">Prénom</span> ou{' '}
              <span className="font-bold">Nom</span>
            </CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            {/* <form onSubmit={onSubmitForm}> */}
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="firstname">Prénom</Label>
                  <Input
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Prénom"
                    autoComplete="given-name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lastname">Nom</Label>
                  <Input
                    id="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nom"
                    autoComplete="family-name"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-center sm:justify-start">
            <Button
              disabled={
                firstName === userFirstName && lastName === userLastName
              }
              // type="submit"
              onClick={onSubmitForm}
            >
              <CircleUserRound className="mr-2 h-4 w-4" />
              Enregistrer
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle>Email et mot de passe</CardTitle>
            <CardDescription>
              <span className="italic">[Bientôt disponible]</span>{' '}
              Réinitialisation / Modification de votre mot de passe.
            </CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    autoComplete="email"
                    disabled
                  />
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input
                    id="password"
                    type="password"
                    value="*************************"
                    autoComplete="current-password"
                    disabled
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-center sm:justify-start">
            <Button disabled>
              <KeyRound className="mr-2 h-4 w-4" />
              Changer le mot de passe
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle>Comptes de connexion</CardTitle>
            <CardDescription>
              <span className="italic">[Bientôt disponible]</span> Connecter
              votre compte GitHub ou Google.
            </CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-2 items-center sm:flex-row sm:justify-between">
                <div className="flex items-center flex-row gap-3 space-y-1.5">
                  <img src="/github-logo.png" alt="logo de google" />
                  <div>GitHub</div>
                </div>
                <Button disabled={disabled}>
                  <Unplug className="mr-2 h-4 w-4" />
                  Connecter
                </Button>
              </div>
            </div>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col gap-2 items-center sm:flex-row sm:justify-between">
                <div className="flex items-center flex-row gap-3 space-y-1.5">
                  <img src="/google-logo.png" alt="logo de google" />
                  <div>Google</div>
                </div>
                <Button disabled={disabled}>
                  <Unplug className="mr-2 h-4 w-4" />
                  Connecter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-[350px] md:w-[750px]">
          <CardHeader>
            <CardTitle>Supprimer votre compte</CardTitle>
            <CardDescription>
              <span className="italic">[Bientôt disponible]</span> Suppression
              de votre compte.
            </CardDescription>
            <Separator className="my-4" />
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <p className="font-thin	text-center	text-sm sm:text-justify">
                  En supprimant votre compte, vous supprimez votre compte, vos
                  données associées, et toutes les connexions avec des tiers.
                  Cette action est irréversible et ne peut pas être annulée.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center sm:justify-start">
            <Button disabled={disabled}>
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer le compte
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </div>
  )
}

export default FormProfil
