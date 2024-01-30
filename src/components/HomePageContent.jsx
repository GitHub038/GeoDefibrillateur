import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

function HomePageContent() {
  return (
    <section className="bg-white rounded-lg shadow-inner dark:bg-gray-900 m-4">
      <div className="gap-6 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-8 lg:px-4">
        <div className="hidden lg:block mt-0">
          <img
            className="w-3/5 opacity-80 lg:w-3/4"
            src="/content-DAE.svg"
            alt="Illustration d'un DAE"
          />
          <Link
            to={'/searchDAE'}
            className="hidden lg:block ml-8 pt-4 lg:ml-[11rem] lg:pt-8"
          >
            <Button
              className="animate-heartbeat hover:animate-none hover:bg-primary"
              variant="destructive"
              asChild
            >
              <Link to="/rechercheDAE">Localisez-moi</Link>
            </Button>
          </Link>
        </div>
        <div className="pt-5 font-light text-gray-500 sm:text-lg dark:text-gray-400 z-0">
          <h2 className="text-center lg:text-justify mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Agir pour lutter contre la mort subite&nbsp;!
          </h2>
          <p className="mb-4 text-center lg:text-justify">
            À peine 1 citoyen sur 10 survit à un arrêt cardiaque faute d’avoir
            bénéficié au bon moment de l&apos;intervention d&apos;une personne,
            le temps que les secours interviennent. Cette personne aurait pu
            leur sauver la vie en pratiquant les gestes de premier secours et en
            relançant le cœur par un choc électrique en utilisant un DAE
            (Défibrillateur Automatisé Externe).
          </p>
          <p className="font-bold text-center lg:text-justify">
            40 000 à 50 000 arrêts cardiaques par an sont recensés. Mais où se
            trouve le défibrillateur le plus proche ?
          </p>
        </div>
      </div>
    </section>
  )
}

export { HomePageContent }
