import AuthFormUser from '@/components/AuthFormUser'
// import AuthentSidebar from '@/components/AuthentSidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const Authentification = () => {
  const [signType, setSignType] = useState('signIn')

  const onChangeSign = () => {
    if (signType === 'signUp') {
      setSignType('signIn')
    } else {
      setSignType('signUp')
    }
  }

  return (
    <>
      <header className="bg-header relative opacity-85 h-screen bg-right">
        {/* <AuthentSidebar /> */}
        <div className="h-screen w-full mx-auto flex justify-center items-center my-auto px-4 sm:px-8">
          <div className="bg-black opacity-80 rounded mx-auto flex w-full flex-col justify-center space-y-6 p-4 sm:p-10 sm:w-[400px]">
            <AuthFormUser onChangeSign={onChangeSign} signType={signType} />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
            <Button
              className={cn(
                buttonVariants({ variant: 'outline-offset-2' }),

                'flex items-center w-auto gap-2 ',
              )}
              onClick={onChangeSign}
            >
              {signType === 'signUp' ? 'Ou se connecter' : "Ou s'inscrire"}
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Authentification
