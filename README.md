<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/GitHub038/ProjetEnEquipe/">
    <img src="/public/GeoDefibrillateurs.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">GéoDéfibrillateurs</h3>

  <p align="center">
    Trouver un défibrillateur en 1 clic avec GéoDéfibrillateurs !
    <br />
    <a href="https://github.com/GitHub038/ProjetEnEquipe/"><strong>Voir le projet »</strong></a>
    <br />
    <br />
    <a href="https://geodefibrillateurs.netlify.app/" target="_blank">Voir Démo</a>
    ·
    <a href="https://github.com/GitHub038/ProjetEnEquipe/issues">Signaler Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#à-propos-de-ce-projet">À propos de ce projet</a>
      <ul>
        <li><a href="#bibliothèques-et-frameworks">Bibliothèques et frameworks</a></li>
      </ul>
    </li>
    <li>
      <a href="#pour-commencer">Pour commencer</a>
      <ul>
        <li><a href="#configuration requise">Configuration requise</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
        <li><a href="#éléments-techniques">Éléments techniques</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#remerciements">Remerciements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## À propos de ce projet

[![Product Name Screen Shot][product-screenshot]](https://geodefibrillateurs.netlify.app/)

Trouver un défibrillateur automatisés externes (DAE) avec l'[API](https://api-geodae.sante.gouv.fr/api/doc) des défibrillateurs déclarés dans la base nationale [Géo'DAE](https://www.data.gouv.fr/fr/datasets/61556e1e9d6adb2df86eb0fc/) !

GéoDéfibrillateurs rend accessible cette donnée qui peut sauver une vie. En effet :

> _À peine 1 citoyen sur 10 survit à un arrêt cardiaque faute d'avoir bénéficié au bon moment de l'intervention d'une personne, le temps que les secours interviennent.Cette personne aurait pu leur sauver la vie en pratiquant les gestes de premier secours et en relançant le cœur par un choc électrique en utilisant un DAE._

<p align="right">(<a href="#readme-top">⬆️</a>)</p>

### Bibliothèques et frameworks

- [![Vite][Vite.js]][Vite-url]
- [![React][React.js]][React-url]
- [![Firebase][Firebase]][Firebase-url]
- [![Netlify][Netlify]][Netflify-url]

<p align="right">(<a href="#readme-top">⬆️</a>)</p>

<!-- GETTING STARTED -->

## Pour commencer

Pour mettre en place une copie locale et la faire fonctionner, suivez les étapes suivantes.

### Configuration requise

- [git][git] v2.43 ou supérieure
- [NodeJS][node] v20.10 ou supérieur
- [npm][npm] v10.2.3 ou supérieure

Pour vérifier qu'ils sont correctement installés et configuré vous pouvez executer :

```shell
git --version
node --version
npm --version
```

### Installation

1. Cloner le repo
   ```sh
   git clone https://github.com/GitHub038/ProjetEnEquipe/.git
   ```
2. Installer les paquets NPM
   ```sh
   npm i
   ```
3. Configurer les variables d'environnement selon votre choix de base de données
4. Lancer le projet à l'aide de la commande suivante :

```sh
   npm start
```

<p align="right">(<a href="#readme-top">⬆️</a>)</p>

<!-- ELEMENT TECHNIQUE -->

## Éléments techniques

Ce projet regroupe les éléments techniques suivants :

- React Hooks
- Bibliothèque de composants
- Context API (ou State Manager)
- Gestion de l'authentification (Login/Register)
- Intégration d'une API
- Réalisation de tests
- Mise en production / Déploiement

Ce que nous avons utilisé :

- Bibliothèque de composants : [Tailwind-ccs](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- Authentification et base de données : [Firebase][Firebase-url]
- Intégration d'une API : [Géo'DAE](https://www.data.gouv.fr/fr/datasets/61556e1e9d6adb2df86eb0fc/)
- Tests : [Vitest](https://vitest.dev/), [Testing-library](https://testing-library.com/)

<!-- ROADMAP -->

## Roadmap

- [x] Écrire la documentation
- [ ] _Tests_ :
  - [ ] Finir les tests d'intégration
  - [ ] Établir les test e2e avec `cypress`
- [ ] _Refactors_ :
  - [ ] Réorganiser et restructurer le code afin de favoriser sa lisibilité et sa clarté, mais aussi pour faciliter les tests
- [ ] _Authentification_ : Ajout de la fonctionnalité "Mot de passe oublié"

<p align="right">(<a href="#readme-top">⬆️</a>)</p>

<!-- CONTACT -->

## Contact

Sao dev - [GitHub](https://github.com/GitHub038)
Bamba Thiam - [GitHub](https://github.com/BambaThiam)
Pierre-Henri Merrer - [Portfolio](https://ph-merrer.fr/)

Lien du projet : [https://geodefibrillateurs.netlify.app/](https://geodefibrillateurs.netlify.app/)

<p align="right">(<a href="#readme-top">⬆️</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Remerciements

- [MikeCodeur](https://github.com/MikeCodeur)
- [Dimitri L](https://github.com/drimov)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/GitHub038/ProjetEnEquipe.svg?style=for-the-badge
[contributors-url]: https://github.com/GitHub038/ProjetEnEquipe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GitHub038/ProjetEnEquipe.svg?style=for-the-badge
[forks-url]: https://github.com/GitHub038/ProjetEnEquipe/network/members
[stars-shield]: https://img.shields.io/github/stars/GitHub038/ProjetEnEquipe.svg?style=for-the-badge
[stars-url]: https://github.com/GitHub038/ProjetEnEquipe/stargazers
[issues-shield]: https://img.shields.io/github/issues/GitHub038/ProjetEnEquipe.svg?style=for-the-badge
[issues-url]: https://github.com/GitHub038/ProjetEnEquipe/issues
[product-screenshot]: /public/screenshot.gif
[React.js]: https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=white
[React-url]: https://reactjs.org/
[Vite.js]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/guide/
[Firebase]: https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white
[Firebase-url]: https://firebase.google.com/docs?hl=fr
[Netlify]: https://img.shields.io/badge/netlify-%ff9900.svg?style=for-the-badge&logo=netlify&logoColor=white
[Netflify-url]: https://docs.netlify.com/
[git]: https://git-scm.com/
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/
