import AuthFormUser from '../components/AuthFormUser'
import { useState } from 'react'
import './bgHeaderPage.css'

const Authentification = (signup = false) => {
  const [create, setCreate] = useState(signup)
  const handleSignUp = () => {
    setCreate(true)
  }
  const handleSignIn = () => {
    setCreate(false)
  }

  return (
    <>
      <header className="bg-header__opacity relative h-screen">
        <div className="h-screen w-full mx-auto flex justify-center items-center my-auto px-4 sm:px-8">
          <div className="bg-[#D8E4DD] bg-opacity-60 dark:bg-black dark:bg-opacity-50 rounded mx-auto flex w-full flex-col justify-center space-y-6 p-4 sm:p-10 sm:w-[450px]">
            <AuthFormUser create={create} />
            {create ? (
              <p className="px-8 text-center text-sm text-muted-foreground">
                Pas encore de compte&nbsp;?{' '}
                <span
                  className="underline font-bold underline-offset-4 hover:text-primary"
                  onClick={handleSignIn}
                >
                  Inscrivez-vous.
                </span>
              </p>
            ) : (
              <p className="px-8 text-center text-sm text-muted-foreground">
                Vous avez déjà un compte&nbsp;?{' '}
                <span
                  className="underline font-bold underline-offset-4 hover:text-primary"
                  onClick={handleSignUp}
                >
                  Connectez-vous.
                </span>
              </p>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Authentification
