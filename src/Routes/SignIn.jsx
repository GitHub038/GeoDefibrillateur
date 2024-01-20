import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

import { app } from '@/firebase/init_Firebase'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

// const SignIn = ({ isLoading }) => {
const SignIn = () => {
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const auth = getAuth(app)
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        navigate('/profil')
      })
      .catch((error) => {
        toast({
          title: '🤷🏾 Attention!',
          description:
            'Vérifier votre email et mot de passe ou Inscrivez-vous !',
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
              autoComplete="current-password"
              autoCorrect="off"
              disabled={isLoading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            disabled={isLoading}
            type="submit"
            onClick={(e) => handleSignIn(e)}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Se connecter
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  )
}
export default SignIn
