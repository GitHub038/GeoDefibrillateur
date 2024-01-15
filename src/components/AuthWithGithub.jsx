import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'

import { Button } from './ui/button'
import { Icons } from './ui/icons'
import { useState } from 'react'
import { app } from '@/firebase/init_Firebase'

import { useNavigate } from 'react-router-dom'

const githubProvider = new GithubAuthProvider()

export const AuthWithGithub = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleGithubLogin = () => {
    try {
      setIsLoading(true)

      signInWithPopup(auth, githubProvider).then((result) => {
        setUser(result.user)
        console.log(user)
      })
    } catch (error) {
      const errorMessage = error.message

      console.log(errorMessage)
    }

    setIsLoading(false)
  }

  return (
    <div>
      {user ? (
        navigate('/profil')
      ) : (
        <Button
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={handleGithubLogin}
          className="w-full"
        >
          {isLoading ? (
            <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.GitHub className="mr-2 h-4 w-4" />
          )}{' '}
          Github
        </Button>
      )}
    </div>
  )
}
