import AuthFormUser from '@/components/AuthFormUser'
import AuthentSidebar from '@/components/AuthentSidebar'
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
      <div className="md:hidden m-6 border-2 rounded-lg border-slate-200">
        <img
          src="/heart-attack.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/heart-attack.jpg"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative mt-16 h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <AuthentSidebar />
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
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
      </div>
    </>
  )
}

export default Authentification
