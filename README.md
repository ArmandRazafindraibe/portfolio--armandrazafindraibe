# E-Portfolio - Structure Modulaire

## 📁 Architecture du projet

Voici la structure complète de votre projet séparé en fichiers modulaires:

```
e-portfolio/
├── index.html                 # Page d'accueil
├── pages/
│   ├── about.html            # Page À propos
│   ├── formations.html       # Page Formations
│   ├── competences.html      # Page Compétences
│   ├── projets.html          # Page Projets
│   └── contact.html          # Page Contact
├── css/
│   ├── variables.css         # Variables CSS (couleurs, espacements, etc.)
│   └── styles.css            # Styles principaux
├── js/
│   ├── main.js               # Script principal et utilitaires
│   ├── navigation.js         # Gestion de la navigation
│   ├── animations.js         # Animations et observateurs
│   ├── filters.js            # Filtrage des projets
│   └── forms.js              # Gestion des formulaires
└── README.md                 # Ce fichier
```

## 🎯 Description des fichiers

### Pages HTML

- **index.html** - Page d'accueil avec présentation
- **pages/about.html** - Présentation du profil, motivations et centres d'intérêt
- **pages/formations.html** - Diplômes et certifications
- **pages/competences.html** - Compétences avec barres de progression
- **pages/projets.html** - Portfolio de projets avec filtrage par catégorie
- **pages/contact.html** - Formulaire de contact

### Fichiers CSS

- **css/variables.css** - Définit tous les variables CSS:
  - Couleurs (primitives et sémantiques)
  - Typographie
  - Espacements
  - Ombres
  - Animations
  
- **css/styles.css** - Contient tous les styles:
  - Mise en page
  - Composants
  - Animations
  - Design responsive

### Fichiers JavaScript

- **js/main.js** - Initialisation globale et utilitaires:
  - Initialisation des événements
  - Scroll fluide
  - Détection responsive
  - Fonctions utilitaires

- **js/navigation.js** - Gestion de la navigation:
  - Menu hamburger
  - Mise à jour de l'état actif
  - Fermeture du menu

- **js/animations.js** - Animations au scroll:
  - Intersection Observer pour les sections
  - Animation des barres de compétences
  - Smooth scroll

- **js/filters.js** - Filtrage des projets:
  - Filtrage par catégorie
  - Animations de filtrage

- **js/forms.js** - Gestion des formulaires:
  - Soumission de formulaire
  - Messages de succès
  - (À adapter pour un backend)

## 🚀 Utilisation

1. **Cloner/copier** les fichiers dans votre dossier de projet
2. **Ouvrir index.html** dans un navigateur
3. **Naviguer** entre les pages via le menu de navigation

### Structure des chemins:
- Depuis `index.html`: `href="pages/about.html"`
- Depuis une page dans `/pages/`: `href="../index.html"` ou `href="about.html"`
- Les feuilles de style: `href="css/variables.css"`
- Les scripts JS: `src="js/navigation.js"`

## 🎨 Personnalisation

### Modifier les couleurs
Editez `css/variables.css`:
```css
:root {
  --green-dark: #2D6A4F;
  --green-medium: #52B788;
  --green-light: #B7E4C7;
  /* ... */
}
```

### Modifier la mise en page
Editez `css/styles.css` pour ajuster les styles des composants.

### Ajouter des nouvelles pages
1. Créez `pages/nouvelle-page.html`
2. Copiez la structure d'une page existante
3. Ajoutez le lien dans la navigation
4. Importez les CSS et JS nécessaires

## 📱 Responsive Design

Le site est responsive grâce aux:
- CSS Grid et Flexbox
- Media queries (768px, 480px)
- Unités CSS relatives (rem, em, %)

## 🔧 Scripts et Dépendances

- Aucune dépendance externe requise
- Utilise uniquement du JavaScript vanilla
- Compatible avec tous les navigateurs modernes

## 💡 Conseils de développement

1. **Maintenez la séparation des préoccupations:**
   - CSS dans les fichiers .css
   - JavaScript dans les fichiers .js
   - HTML dans les fichiers .html

2. **Utilisez les variables CSS:**
   - Facilitent la maintenance
   - Permettent des changements globaux rapidement

3. **Modulez le JavaScript:**
   - Chaque fichier a une responsabilité claire
   - Facile à déboguer et maintenir

4. **Testez sur mobile:**
   - Utilisez DevTools (F12)
   - Vérifiez la responsive design

## 🎓 Notes

- Pour intégrer un formulaire backend, modifiez `js/forms.js`
- Les animations utilisent l'Intersection Observer API
- Le menu hamburger s'affiche automatiquement sur mobile

---

**Dernière mise à jour:** Novembre 2025
