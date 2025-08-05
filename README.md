# Hackatweet Frontend

![Next.js](https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?logo=fontawesome&logoColor=white)

## Description

Application frontend pour Hackatweet - Un clone de Twitter développé avec Next.js et React.

## Technologies utilisées

- **Next.js** - Framework React pour le développement web
- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Redux** - Gestion d'état de l'application
- **Tailwind CSS** - Framework CSS utilitaire
- **FontAwesome** - Icônes
- **Jest** - Framework de test

## Structure du projet

```
frontend/
├── components/          # Composants React réutilisables
│   ├── Home.js         # Page d'accueil principale
│   ├── Login.js        # Composant de connexion
│   ├── SignIn.js       # Composant de connexion
│   ├── SignUp.js       # Composant d'inscription
│   ├── Tweet.js        # Composant d'affichage des tweets
│   ├── Trends.js       # Composant des tendances
│   └── ...
├── pages/              # Pages Next.js
├── styles/             # Fichiers CSS
├── reducers/           # Reducers Redux
└── public/             # Ressources statiques
```

## Installation

1. Cloner le repository

```bash
git clone https://github.com/SandrineFial/hackatweetfrontend.git
cd hackatweetfrontend
```

2. Installer les dépendances

```bash
npm install
```

3. Configurer les variables d'environnement

```bash
# Modifier l'URL du backend dans components/Home.js
const BACK_END = "http://localhost:3000" // ou https://hackatweet-backend-ac9g.vercel.app
```

## Lancement de l'application

### Mode développement

```bash
npm run dev
```

L'application sera disponible sur `http://localhost:3001`

### Mode production

```bash
npm run build
npm start
```

## Fonctionnalités

- ✅ **Authentification** - Connexion et inscription des utilisateurs
- ✅ **Publication de tweets** - Création de nouveaux tweets (max 280 caractères)
- ✅ **Affichage des tweets** - Timeline des tweets
- ✅ **Hashtags** - Support et affichage des hashtags
- ✅ **Tendances** - Affichage des hashtags populaires
- ✅ **Interface responsive** - Design adaptatif

## Scripts disponibles

```bash
npm run dev          # Démarrer en mode développement
npm run build        # Construire l'application pour la production
npm start            # Démarrer l'application en production
npm test             # Lancer les tests
npm run lint         # Vérifier le code avec ESLint
```

## Configuration

### Backend

Assurez-vous que le backend est démarré sur `http://localhost:3000` ou modifiez l'URL dans `components/Home.js`.

### Tailwind CSS

La configuration Tailwind se trouve dans `tailwind.config.js`.

### Webpack

Configuration personnalisée disponible dans `webpack.config.js`.

## Développement

### Structure des composants

- `Home.js` - Composant principal avec gestion des tweets et tendances
- `Login.js` - Gestion de l'authentification
- `Tweet.js` - Affichage individuel des tweets
- `Trends.js` - Affichage des hashtags tendances

### État Redux

L'état utilisateur est géré via Redux dans `reducers/user.js`.

## Licence

Ce projet est sous licence MIT.

---

👨‍💻 Auteur
Sandrine Fialon & La Capsule (Projet école)

- https://www.fialons-web.fr/
- Linkedin : https://www.linkedin.com/in/fialonsandrine/
