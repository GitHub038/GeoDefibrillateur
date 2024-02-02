import SignIn from '@/routes/SignIn'
import SignUp from '@/routes/SignUp'

// import { AuthWithGithub } from './AuthWithGithub'

const AuthFormUser = ({ create }) => {
  const label = create ? "S'identifier" : 'Inscrivez-vous'
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">{label}</h1>
        <p className="text-sm text-muted-foreground">
          Entrer votre adresse mail et mot de passe
        </p>
      </div>
      <div className="grid gap-2">{create ? <SignIn /> : <SignUp />}</div>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div> */}
      {/* <AuthWithGithub /> */}
    </div>
  )
}

export default AuthFormUser
