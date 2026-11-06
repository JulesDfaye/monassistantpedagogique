# MON ASSISTANT PÉDAGOGIQUE IA – SÉNÉGAL

Application web responsive pour préparer, enseigner, évaluer et accompagner les apprentissages au Sénégal.

## Fonctionnalités

- Connexion sécurisée avec Supabase Auth.
- Inscription enseignant et mot de passe oublié.
- Espace enseignant : tableau de bord, classes, préparations, générateur IA, assistant, bibliothèque.
- Espace administrateur : écoles, enseignants, comptes, rôles, référentiels, documents, agent IA, statistiques, journaux, paramètres.
- Architecture multi-écoles évolutive.
- Migrations PostgreSQL et politiques RLS.
- Tests de sécurité et documentation d’installation.
- Référentiel CEB versionné et générateur IA de fiches pédagogiques.

## Démarrage

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Migrations

Exécuter dans l’ordre : `supabase/migrations/001` à `011`, puis `supabase/seed.sql`.

## Déploiement GitHub + Vercel

1. Créez un dépôt GitHub.
2. Poussez le contenu de ce dossier.
3. Connectez le dépôt à Vercel.
4. Ajoutez les variables d’environnement.
5. Déployez.
