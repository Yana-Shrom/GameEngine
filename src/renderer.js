function openTab(evt, tabName) {
  // Cacher tous les contenus des onglets et désactiver les étiquettes
  const tabContents = document.getElementsByClassName('tab-content');
  for (let content of tabContents) {
      content.style.display = 'none';
  }

  const tabLabels = document.getElementsByClassName('tab-label');
  for (let label of tabLabels) {
    label.classList.remove('active');
  }

  // Afficher le contenu de l'onglet sélectionné et activer l'étiquette correspondante
  const selectedTabContent = document.getElementById(tabName);
  selectedTabContent.style.display = 'block';

  evt.currentTarget.classList.add('active');
}


