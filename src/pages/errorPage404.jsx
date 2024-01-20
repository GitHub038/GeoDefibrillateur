import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage404 = () => {
  return (
    <div className="container flex h-screen flex-col px-4 md:px-8 lg:px-16">
      <div className="flex flex-grow items-center">
        <div className="mx-auto grid grid-cols-1 px-4 md:grid-cols-2 md:gap-2">
          <div className="mx-auto py-2 md:my-auto">
            <h1 className="mx-auto py-2 text-center text-5xl md:py-4 md:text-6xl">
              Error 404
            </h1>
            <p className="py-2 text-center text-lg md:py-4 md:text-xl">
              La page que vous recherchez n'existe pas.
            </p>
            <Link to={'/'} className="flex">
              <Button className="mx-auto" size={'lg'}>
                Retour au Menu
              </Button>
            </Link>
          </div>
          <div className="w-full py-2">
            <img
              src="/BackgroundError.png"
              alt="Error 404"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage404
