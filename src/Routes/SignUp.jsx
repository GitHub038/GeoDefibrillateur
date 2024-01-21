// import { app } from '@/firebase/init_Firebase'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { app } from '@/firebase/init_Firebase'

import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

// const SignUp = ({ isLoading }) => {
const SignUp = () => {
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const auth = getAuth(app)
  const handleSignUp = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        toast({
          title: '🎉 Bravo, compte crée avec succès !',
          description: 'Cliquez sur "Connectez-vous", et identifiez-vous!',
        })
      })
      .catch((error) => {
        toast({
          title: '🤷🏾 Attention!',
          description:
            error.message || 'Une erreur est survenue. Veuillez réessayer',
        })
      })
      .finally(() => setIsLoading(false))
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
              id="email"
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
              id="password"
              name="pass"
              type="password"
              placeholder="Password"
              autoCapitalize="none"
              autoComplete="new-password"
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
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            S'inscrire
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default SignUp
