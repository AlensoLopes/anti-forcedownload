# Extension Chrome - Anti-ForceDownload

Cette extension Chrome permet de modifier le comportement des liens de téléchargement en supprimant l'attribut "forcedownload" et en ajoutant l'attribut "target: _blank". Cela ouvrira les liens de téléchargement dans un nouvel onglet plutôt que de forcer le téléchargement.

## Installation

1. Clonez ce dépôt ou téléchargez le code source.

```bash
git clone https://github.com/AlensoLopes/anti-forcedownload.git
```

2. Ouvrez Chrome et accédez à la page `chrome://extensions/`.

3. Activez le mode développeur (Developer mode) en haut à droite.

4. Cliquez sur "Load unpacked" et sélectionnez le dossier où se trouve le code source de l'extension.

5. L'extension sera maintenant installée. Vous pouvez la désactiver ou la supprimer à tout moment depuis la page `chrome://extensions/`.

## Fonctionnement

L'extension agit automatiquement sur les liens de téléchargement présents sur les pages web. Elle supprime l'attribut "forcedownload" et ajoute l'attribut "target: _blank".

## Contributions

Les contributions sont les bienvenues ! Si vous souhaitez améliorer cette extension, n'hésitez pas à ouvrir une Pull Request.

## Problèmes et Suggestions

Si vous rencontrez des problèmes ou si vous avez des suggestions, veuillez les signaler en ouvrant une issue dans le dépôt GitHub.

## Licence

Ce projet est sous licence [MIT](LICENSE).
