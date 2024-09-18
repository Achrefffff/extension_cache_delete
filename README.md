# 🚀 Cache Manager Extension

## 📝 Description  

**Cache Manager** est une extension Chrome légère et performante qui vous permet de visualiser et de gérer facilement les fichiers mis en cache par votre navigateur. Cette extension est idéale pour ceux qui souhaitent garder leur navigateur rapide et propre en gérant efficacement leur cache.

---

## 🔧 Fonctionnalités  

- **📊 Visualisation de la taille du cache** : Affiche la taille du cache de votre navigateur (note : certaines limitations s'appliquent).
- **🧹 Effacement du cache** : Permet de supprimer tous les fichiers de cache en un seul clic.
- **✅ Indicateur de statut** : Affiche un message de confirmation après l'effacement réussi du cache.

---

## 📥 Installation

1. Clonez ou téléchargez ce dépôt sur votre machine :
   ```bash
   git clone https://github.com/votre-utilisateur/cache-manager-extension.git
Ouvrez Google Chrome et allez dans chrome://extensions/.

2. Activez le Mode développeur (coin supérieur droit).

3. Cliquez sur Charger l'extension non empaquetée et sélectionnez le dossier du projet.

4. Cache Manager est maintenant ajouté à Chrome, prêt à l'emploi !  


## 🚀 Utilisation
Cliquez sur l'icône Cache Manager dans la barre d'outils de Chrome.
La fenêtre popup s'ouvre et affiche des informations sur le cache actuel. (La taille du cache peut ne pas s'afficher en raison des limitations de l'API Chrome).
Cliquez sur Effacer le cache pour supprimer les fichiers en cache.
Un message de confirmation s'affiche pour indiquer le succès de l'opération.    

## 🔐 Permissions  
L'extension nécessite les autorisations suivantes :

browsingData : Pour permettre l'effacement du cache.
activeTab : Pour accéder à l'onglet actif lors de l'utilisation de l'extension.
declarativeNetRequest : Pour gérer les données de navigation.
storage : Pour stocker temporairement certaines informations si nécessaire.  

## 📂 Fichiers principaux    

manifest.json : Le fichier de configuration qui décrit les permissions et les ressources de l'extension.
popup.html : Le fichier HTML responsable de l'interface utilisateur.
popup.js : Le script JavaScript qui gère les actions de l'utilisateur (affichage de la taille du cache et effacement).
background.js : Gère l'effacement du cache via les APIs Chrome.  

## ⚠️ Limitations  
L'API Chrome ne permet pas de récupérer la taille exacte du cache du navigateur, c'est pourquoi une taille estimée ou un message alternatif est affiché.  
Cette extension fonctionne uniquement sur Google Chrome ou les navigateurs basés sur Chromium.  

## 🤝 Contribution  
Les contributions sont les bienvenues ! Si vous souhaitez ajouter des fonctionnalités ou améliorer le code existant, veuillez ouvrir une issue ou soumettre une pull request.

## 📄 Licence  
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.