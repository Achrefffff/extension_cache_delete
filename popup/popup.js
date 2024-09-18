// Fonction pour calculer la taille des ressources en cache
function getCacheSize() {
  const cacheSizeElem = document
    .getElementById("cache-size")
    .querySelector("span");

  let totalSize = 0;

  // Utiliser performance API pour obtenir les ressources
  const resources = performance.getEntriesByType("resource");

  // Boucler sur toutes les ressources et calculer leur taille
  resources.forEach((resource) => {
    if (resource.transferSize && resource.encodedBodySize) {
      totalSize += resource.transferSize || resource.encodedBodySize;
    }
  });

  // Convertir en Mo
  const sizeInMB = (totalSize / 1024 / 1024).toFixed(2);

  // Afficher la taille
  cacheSizeElem.textContent = `${sizeInMB} MB`;
}

// Effacer le cache
document.getElementById("clear-cache").addEventListener("click", () => {
  const loadingSpinner = document.getElementById("loading");
  const statusDiv = document.getElementById("status");

  // Afficher l'animation de chargement
  loadingSpinner.classList.remove("hidden");
  statusDiv.textContent = "";

  chrome.runtime.sendMessage({ action: "clearCache" }, (response) => {
    // Masquer l'animation de chargement après la réponse
    loadingSpinner.classList.add("hidden");

    if (response.success) {
      statusDiv.textContent = "Le cache a été effacé avec succès !";
      getCacheSize(); // Mettre à jour la taille du cache
    } else {
      statusDiv.textContent = "Erreur lors de l'effacement du cache.";
    }
  });
});

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  getCacheSize(); // Afficher la taille des ressources mises en cache à l'ouverture
});
