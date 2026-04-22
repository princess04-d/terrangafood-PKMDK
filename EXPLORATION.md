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

🌐 Architecture Frontend (par DF -- Khadim Gueye)

Nombre de pages : 3

/ — Accueil (présentation de TerrangaFood)
/restaurants — Liste des restaurants
/restaurants/[id] — Détail d'un restaurant et ses plats


Composants réutilisables :

Header — barre de navigation commune à toutes les pages
RestaurantCard — carte affichant les infos d'un restaurant (nom, cuisine, note, horaires)
PlatCard — carte affichant un plat (nom, description, prix, catégorie)


Méthode d'appel API : fetch centralisé dans lib/api.js via la variable NEXT_PUBLIC_API_URL
Observations :

Lors de l'exploration, GET /api/restaurants retournait [] car le seed n'avait pas encore été exécuté
La variable NEXT_PUBLIC_API_URL dans le .env permet de basculer facilement entre environnement local et production
Les composants RestaurantCard et PlatCard sont découplés et réutilisables sur plusieurs pages
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

## 🧪 Tests fonctionnels (par QA -- Marie kebe)


## 🧪 Tests QA (par Marie Kebe)

- L’application démarre correctement (API + Frontend).
- Les restaurants s’affichent sur la page d’accueil.
- La navigation vers les détails d’un restaurant fonctionne.
- Les plats associés à chaque restaurant sont visibles.
- Les routes API répondent correctement :
  - GET /api/restaurants
  - GET /api/restaurants/:id

## 🐞 Bugs observés

- Aucun bug critique détecté.
- Légère lenteur au premier chargement de l’API.
- Certaines images peuvent ne pas s’afficher selon les données.
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