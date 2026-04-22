# Rapport d’exploration -- Lab 0

##  Équipe : Team PKDMK

---

##  Architecture Backend (par DB -- [Prénom])

- **Nombre de modèles :** ...
- **Endpoints existants :**
  - GET `/api/restaurants`
  - GET `/api/restaurants/:id`
  - ...
- **Pattern utilisé :** MVC (Model – View – Controller)

---

## 🌐 Architecture Frontend (par DF -- [Prénom])

- **Nombre de pages :** ...
- **Composants réutilisables :**
  - Header
  - RestaurantCard
  - PlatCard
- **Méthode d’appel API :** fetch dans `lib/api.js`

---

## ⚙️ Configuration (par DO -- [Prénom])

- **Variables d’environnement :**
  - MONGODB_URI
  - PORT
- **Scripts npm :**
  - dev
  - start
  - seed
- **Fichiers ignorés par Git :**
  - node_modules/
  - .env
  - .next/

---

## 🧪 Tests fonctionnels (par QA -- [Prénom])

- **Fonctionnalités testées :**
  - [liste des fonctionnalités testées]
- **Bugs trouvés :**
  - [aucun / liste des bugs]

---

## 📊 Synthèse (par CP -- [Princesse DIMENI])

- **Ce qui fonctionne bien :**
  - L’architecture globale du projet est bien structurée (backend et frontend séparés).
  - Les routes principales de l’API fonctionnent correctement (restaurants et détails des restaurants).
  - Les composants frontend sont bien organisés et réutilisables.
  - La configuration du projet (variables d’environnement et scripts npm) est opérationnelle.
  - Le projet peut être lancé et testé sans blocage majeur.
- **Ce qui manque (les 30%) :**
  - - La gestion des conflits (merge conflicts Git) n’est pas encore totalement maîtrisée et intégrée dans le workflow de l’équipe.
  ## ⚙️ Configuration (par DO -- Khadija)

- **Variables d’environnement :**
  - MONGODB_URI : URI de connexion à MongoDB
  - PORT : port du serveur backend
  - SECRET_KEY : clé secrète pour la sécurité

- **Scripts npm :**
  - dev : lance le serveur en mode développement
  - start : lance le serveur en production
  - seed : insère des données de test dans la base

- **Fichiers ignorés par Git :**
  - node_modules/ : dépendances recréées automatiquement
  - .env : contient des secrets
  - .next/ : fichiers générés par le build frontend
