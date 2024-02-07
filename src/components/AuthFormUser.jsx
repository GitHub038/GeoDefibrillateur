<<<<<<< Updated upstream
import SignIn from '@/routes/SignIn'
import SignUp from '@/routes/SignUp'
=======
import SignIn from './../routes/SignIn'
import SignUp from './../routes/SignUp'
>>>>>>> Stashed changes


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
    </div>
  )
}

export default AuthFormUser
