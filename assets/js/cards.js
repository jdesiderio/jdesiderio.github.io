// Fonction pour récupérer les données JSON d'une URL
async function fetchData(url) {
  try {
    const response = await fetch(url);
    // Vérifie si la réponse est correcte
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    // Renvoie les données JSON
    return await response.json();
  } catch (error) {
    // Gère les erreurs de récupération
    console.error(`Une erreur s'est produite lors de la récupération des données JSON: ${error.message}`);
    throw error;
  }
}

// Fonction pour créer des cartes de projet
async function createProjectCards() {
  const cardContainer = document.querySelector('.card-container');
  const jsonPath = 'projects.json';

  try {
    const data = await fetchData(jsonPath);

    // Parcourt chaque projet dans les données JSON
    data.forEach((project, index) => {
      // Crée les éléments HTML pour chaque carte
      const card = document.createElement('div');
      card.className = 'card';
      card.setAttribute('id', `card-${index + 1}`);

      // Ajoute une image pour chaque projet
      const image = document.createElement('img');
      image.src = project.imageUrl;
      image.className = 'small';
      image.alt = project.alt;

      // Titre et sous-titre du projet
      const title = document.createElement('h3');
      title.textContent = project.title;
      const subtitle = document.createElement('p');
      subtitle.textContent = project.subtitle;

      // Icônes représentant les technologies utilisées
      const icons = document.createElement('div');
      icons.className = 'icons';
      project.icons.forEach((iconClass) => {
        const icon = document.createElement('i');
        icon.className = `fa-brands fa-xl ${iconClass}`;
        icons.appendChild(icon);
      });

      // Description et outils du projet
      const details = document.createElement('div');
      details.className = 'details';
      const descriptionList = document.createElement('ul');
      project.description.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        descriptionList.appendChild(listItem);
      });
      const tools = document.createElement('p');
      tools.className = 'tools';
      tools.textContent = project.tools;

      // Liens vers le code et le site du projet
      const detailsLinks = document.createElement('div');
      detailsLinks.className = 'details-links';
      detailsLinks.innerHTML = `<a href="${project.github}" target="_blank"><i class="fa-brands fa-github"></i> Voir le code</a>`;
      if (project.site) {
        const siteLink = document.createElement('a');
        siteLink.href = project.site;
        siteLink.target = '_blank';
        siteLink.innerHTML = `Voir le site <i class="fa-solid fa-eye"></i>`;
        detailsLinks.appendChild(siteLink);
      }

      // Gère l'expansion et la réduction de la carte
      const expandLink = document.createElement('div');
      expandLink.className = 'expand-link';
      expandLink.textContent = 'En savoir plus';
      expandLink.addEventListener('click', () => {
        const isExpanded = card.classList.toggle('expanded');
        image.classList.toggle('bigger', isExpanded);
        image.classList.toggle('small', !isExpanded);
        details.classList.toggle('show', isExpanded);
        expandLink.textContent = isExpanded ? 'Réduire' : 'En savoir plus';
      });

      // Assemble la carte et l'ajoute au conteneur
      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(subtitle);
      card.appendChild(icons);
      card.appendChild(details);
      card.appendChild(expandLink);
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la création des cartes de projet:', error);
  }
}

createProjectCards();
