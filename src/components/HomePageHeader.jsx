import React from 'react'
import { Button } from '@/components/ui/button'
import '../pages/bgHeaderPage.css'
import { Link } from 'react-router-dom'

function HomePageHeader() {
  return (
    <>
      <header className="bg-header__opacity relative h-screen">
        <div className="h-screen w-full mx-auto flex flex-col justify-center items-center my-auto">
          <div className="text-white text-shadow-lg shadow-primary text-4xl font-bold px-10 text-center lg:text-6xl dark:text-shadow-none">
            Où est situé le DAE le plus proche&nbsp;?
          </div>
          <Link to={'/searchDAE'} className="text-center pt-24">
            <Button
              className="text-2xl font-bold p-8 animate-heartbeat hover:animate-none hover:bg-primary"
              variant="destructive"
            >
              Localisez-moi
            </Button>
          </Link>
        </div>
      </header>
    </>
  )
}

export { HomePageHeader }
