import React from 'react'
import ReactPlayer from 'react-player'

const HowToUse = () => {
  return (
    <div className="pt-16 sm:pt-16 lg:pt-32 max-w-3xl mx-auto">
      <h2 className="text-2xl text-3xl font-bold mb-4 text-center">
        Apprendre à Utiliser un Défibrillateur Automatisé Externe (DAE)
      </h2>
      <p className="text-base sm:text-lg leading-7">
        Bienvenue à notre guide vidéo sur l'utilisation d'un Défibrillateur
        Automatisé Externe (DAE). Savoir comment utiliser cet appareil peut
        faire la différence lors d'une situation d'urgence, notamment en cas
        d'arrêt cardiaque.
      </p>
      <p className="text-base sm:text-lg leading-7 mt-4">
        Cette vidéo vous guidera à travers les étapes essentielles pour
        administrer une défibrillation de manière sûre et efficace. Apprendre
        ces gestes simples peut contribuer à sauver des vies, car l'utilisation
        rapide d'un DAE augmente considérablement les chances de survie en cas
        d'arrêt cardiaque.
      </p>
      <p className="text-base sm:text-lg leading-7 mt-4">
        Suivez attentivement les instructions et n'hésitez pas à revenir en
        arrière si nécessaire.
      </p>
      <div className="mt-6 sm:mt-8 lg:mt-12 ">
        <ReactPlayer url="https://www.youtube.com/watch?v=1CDNz3VTNVg&ab_channel=AFPAIC" />
      </div>
    </div>
  )
}

export default HowToUse
