# Créations HTML pour Notion

Pages HTML autonomes hébergées sur **GitHub Pages**, à intégrer dans Notion
(lien direct ou bloc `/embed`).

## Principe (fichiers à plat)

Chaque création = **un fichier HTML** déposé à la racine du repo.

```
/fiche-livre.html   →  https://TON-PSEUDO.github.io/TON-REPO/fiche-livre.html
/plante.html        →  https://TON-PSEUDO.github.io/TON-REPO/plante.html
.nojekyll           →  (laisser, sert les fichiers tels quels)
```

> 💡 Nomme les fichiers sans espaces ni accents (`fiche-livre.html`, pas
> `Fiche Livre.html`) pour des URLs sans surprise.

---

## 1. Créer le repo (interface web, sans ligne de commande)

1. [github.com](https://github.com) → **+** (haut droite) → **New repository**.
2. **Repository name** : ex. `creations-html`. **Public**. → **Create repository**.

## 2. Déposer les fichiers HTML

1. **Add file** → **Upload files**.
2. Glisse-dépose tes `.html` (et le fichier `.nojekyll`).
3. **Commit changes**.

## 3. Activer GitHub Pages (une seule fois)

1. **Settings** → **Pages**.
2. **Source** : *Deploy from a branch* → **Branch** `main`, **Folder** `/ (root)` → **Save**.
3. ~1 min plus tard, le site est en ligne à `https://TON-PSEUDO.github.io/TON-REPO/`.

## 4. Lien d'une création

`https://TON-PSEUDO.github.io/TON-REPO/nom-du-fichier.html`

## 5. Intégrer dans Notion

- **Embed** : taper `/embed` → coller l'URL → *Embed link* → ajuster la hauteur.
- **Lien simple** : coller l'URL, choisir *Dismiss*/*Lien* (ouvre la page en plein écran).

## 6. Mettre à jour une création

1. Ouvre le fichier sur GitHub → icône **crayon** ✏️.
2. Modifie / colle le nouveau HTML → **Commit changes**.
3. En ligne en ~30 s–1 min (force le rechargement dans Notion si besoin).

---

## Notes

- Repo **public** = GitHub Pages gratuit (le contenu est de toute façon public via l'URL).
- Délai de mise à jour : 30 s à 2 min après chaque commit.
- Aucune dépendance : tout est inline dans chaque fichier.
