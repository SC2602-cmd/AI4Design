---
name: design-system-aumovio
description: Guidelines for implementing the Aumovio design system in this React + Tailwind project.
---

# Design System Aumovio

Ce skill sert à guider la création ou la mise à jour d’interfaces alignées sur les maquettes Figma fournies pour Aumovio.

## Contexte du projet
- Stack cible : React + TypeScript + Tailwind CSS
- Style actuel : fond noir global, typographie sans-serif, composants simples
- Objectif : respecter l’identité Aumovio tout en restant cohérent avec l’architecture existante

## Couleurs principales
- Orange 500 : #DA3806
- Purple 500 : #341C7D
- Purple : #4827AF
- Grey : #D3D3D3
- White : #FCFCFC
- Black : #000000

### Règles d’usage
- Utiliser l’orange pour les actions primaires, les accents et les états actifs.
- Utiliser le violet pour les états hover, selected et éléments secondaires.
- Utiliser le gris pour les états disabled ou contours discrets.
- Garder le fond blanc pour les cartes et les composants de contenu.

## Typographie
Polices principales à privilégier :
- AUMOVIO Screen Regular pour les textes courants et titres
- AUMOVIO Screen Bold pour les titres forts, boutons et éléments d’action
- AUMOVIO Screen Italic / BoldItalic pour les variantes d’emphase
- Fallback : sans-serif si la police n’est pas disponible

### Règles d’utilisation
- Utiliser la version Regular pour les blocs de texte, descriptions et labels.
- Utiliser la version Bold pour les titres de section, boutons et éléments prioritaires.
- Utiliser les variantes Italic uniquement pour des accents ou mises en valeur discrètes.
- Ne pas mélanger plusieurs familles de police dans un même composant si une seule suffit.

### Échelles
- H1 Desktop : 80px / 100% / regular
- H2 Desktop : 56px / 100% / regular
- H1 Mobile : 36px / 100% / regular
- H3 : 32px / 100% / regular
- H4 : 24px / 100% / regular
- Text R : 20px / 100% / regular
- Text B : 20px / 100% / bold
- Button : 20px / 100% / bold
- Label R / U : 16px / 100%

## Composants clés

### Bouton principal
- Hauteur : 48px
- Rayon : 24px
- Padding horizontal : 24px
- Largeur minimale : 200px
- Largeur maximale : 350px
- Bordure : 3px

#### Variantes
- Default : fond orange, texte blanc
- Hover : fond violet, texte blanc
- Selected : fond violet 500, texte blanc
- Disabled : fond gris, texte blanc
- Outline : bordure orange / violet / gris selon l’état, fond transparent

#### Comportement interactif
- Les changements d’état doivent être fluides avec une transition de type `transition-all duration-200 ease-out`.
- Au survol, le bouton passe en état hover ; au clic, il peut passer en état selected.
- Lorsqu’on quitte le survol, il doit revenir à l’état default si aucun clic n’a été confirmé.
- Les états disabled doivent rester visuellement distincts et ne pas réagir aux interactions.

### Carte / tile
- Fond blanc
- Padding : 24px
- Espacement vertical : 18px
- Coins carrés, sans arrondi
- Image en haut avec ratio proche de 160:90
- Titre en H3
- Description en Label R
- Bouton en bas
- Le visuel de l’image supérieure doit suivre l’asset Figma du gradient ou du contenu graphique correspondant, sans remplacer ce rendu par un simple dégradé CSS approximatif

### Logo Aumovio
Proposer trois variantes visuelles principales :
- Black
- colorfulback
- colorfulWhite
- White

## Style d’implémentation
- Préférer les classes Tailwind explicites et lisibles.
- Utiliser des classes utilitaires plutôt que des styles inline quand c’est possible.
- Respecter les espaces internes et externes visibles dans les maquettes.
- Éviter les surcharges inutiles qui cassent la cohérence du design system.
- Appliquer la police via `font-family: 'AUMOVIO Screen, sans-serif'` et ajuster `font-weight` selon la variante souhaitée.
- Charger les fichiers de police depuis [src/fonts](src/fonts) dans le projet.

## Règles de génération UI
- Quand une interface est créée à partir d’un design, conserver la hiérarchie visuelle et la proportion des éléments.
- Reproduire les boutons avec leur état visuel (default, hover, selected, disabled).
- Respecter les arrondis, bordures et espacements du système.
- Adapter les composants au contexte React existant sans introduire de dépendances inutiles.

## Exemples de classes recommandées
- Bouton principal : `rounded-[24px] h-[48px] px-[24px] min-w-[200px] max-w-[350px] border-[3px] transition-all duration-200 ease-out`
- Carte : `bg-white p-[24px] rounded-none flex flex-col gap-[18px]`
- Titre : `text-[32px] font-normal`
- Description : `text-[16px] text-black`

## Consignes de qualité
- Le rendu doit rester propre sur mobile et desktop.
- Les composants doivent être réutilisables.
- Les contrastes doivent rester lisibles.
- Les états interactifs doivent être explicites.
