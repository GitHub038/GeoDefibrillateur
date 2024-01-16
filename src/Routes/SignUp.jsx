// import { app } from '@/firebase/init_Firebase'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/ui/icons'
import { app } from '@/firebase/init_Firebase'

import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'

const SignUp = ({ isLoading }) => {
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth(app)
  const handleSignUp = async (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        toast({
          title: '🎉 Bravo',
          description:
            'Compte crée avec succés. Connectez-vous avec le Sign In !',
        })
      })
      .catch((error) => {
        toast({
          title: '🤷🏾 Attention!',
          description:
            error.message || 'Une erreur est survenue. Veuillez reessayer',
        })
      })
  }

  return (
    <div>
      <form action="#">
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              name="pass"
              type="password"
              placeholder="Password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            onClick={(e) => handleSignUp(e)}
          >
            {isLoading && (
              <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign up
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default SignUp
