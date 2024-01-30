import React from 'react'

const HowToUse = () => {
  return (
    <section className="bg-white rounded-lg shadow-inner dark:bg-gray-900 mx-4 mb-4 mt-16">
      <div className="items-center py-12 px-4 mx-auto max-w-screen-xl lg:px-24">
        <h2 className="text-center mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white lg:text-4xl">
          Apprendre à Utiliser un Défibrillateur Automatisé Externe (DAE)
        </h2>
        <p className="mt-4 lg:mt-16 text-center    font-light text-gray-700 dark:text-gray-300 sm:text-lg leading-7 py-4 px-8 lg:px-44 lg:text-justify    ">
          Bienvenue à notre guide vidéo sur l'utilisation d'un Défibrillateur
          Automatisé Externe (DAE). Savoir comment utiliser cet appareil peut
          faire la différence lors d'une situation d'urgence, notamment en cas
          d'arrêt cardiaque.
        </p>
        <p className="text-center    font-light text-gray-700 dark:text-gray-300 sm:text-lg leading-7 py-4 px-8 lg:px-44 lg:text-justify    ">
          Cette vidéo vous guidera à travers les étapes essentielles pour
          administrer une défibrillation de manière sûre et efficace. Apprendre
          ces gestes simples peut contribuer à sauver des vies, car
          l'utilisation rapide d'un DAE augmente considérablement les chances de
          survie en cas d'arrêt cardiaque.
        </p>
        <iframe
          className="mt-4 lg:mt-16 w-full aspect-video rounded-lg border-2 border-gray-800 dark:border-gray-300"
          src="https://www.youtube.com/embed/1CDNz3VTNVg"
          title="Savoir utiliser un défibrillateur automatisé externe DAE"
        ></iframe>
        <p className="font-bold text-center sm:text-lg leading-7 px-8 py-12 lg:px-44">
          Suivez attentivement les instructions et n'hésitez pas à revenir en
          arrière si nécessaire.
        </p>
      </div>
    </section>
  )
}

export default HowToUse
