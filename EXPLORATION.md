# Rapport d’exploration -- Lab 0

##  Équipe : Team PKDMK

---

##  Architecture Backend (par DB -- [Mame diarra ndiaye])

- **Nombre de modèles :** 2
- **Endpoints existants :**
-  GET `/api/restaurants` 
-  GET `/api/restaurants/:id` 
-  POST `/api/restaurants`
-  PUT `/api/restaurants/:id` 
-  DELETE `/api/restaurants/:id` 
-  GET `/api/plats` 
-  GET `/api/plats/restaurant/:restaurantId` 
-  GET `/api/plats/:id`
-  POST `/api/plats`
-  PUT `/api/plats/:id` 
-  DELETE `/api/plats/:id`
  
- **Pattern utilisé :** MVC (Model – View – Controller)

• Modèles (models/) : Définissent la structure des données avec Mongoose.
• Contrôleurs (controllers/) : Contiennent la logique métier (ex: tri des restaurants par note, population des données). Ils utilisent des fonctions asynchrones (async/await) et gèrent les erreurs via un bloc try/catch.
• Routes (routes/) : Font le lien entre les URLs et les fonctions des contrôleurs.

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