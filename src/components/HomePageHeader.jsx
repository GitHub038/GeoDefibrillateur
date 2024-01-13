import React from 'react'
import { Button } from '@/components/ui/button'

function HomePageHeader() {
  return (
    <>
      <header className="bg-header h-screen opacity-85 bg-right">
        <div className="text-white text-shadow-lg shadow-primary text-4xl font-bold pt-64 px-10 text-center lg:text-6xl">
          Où est situé le DAE le plus proche&nbsp;?
        </div>
        <div className="text-center pt-24">
          <Button
            className="text-2xl font-bold p-8 animate-heartbeat hover:animate-none hover:bg-primary"
            variant="destructive"
          >
            Localisez-moi
          </Button>
        </div>
        {/* <div className="hidden lg:block bg-[linear-gradient(180deg,transparent,_#2525259c,_#fff)] lg:h-[19rem] lg:mt-[22rem]"></div> */}
      </header>
    </>
  )
}

export { HomePageHeader }
