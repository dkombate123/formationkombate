// Code JavaScript pour la page d'accueil de la formation en ligne


const loading = document.getElementById('loader');
    const content = document.getElementById('content');

    // Ajouter la classe "loading" à l'élément de chargement
    loading.classList.add('loader');

    // Masquer l'élément de contenu
    content.style.display = 'none';

    // Attendre que la page soit entièrement chargée
    window.addEventListener('load', () => {
      // Supprimer la classe "loading" de l'élément de chargement
      loading.classList.remove('loader');

      // Afficher l'élément de contenu
      content.style.display = 'block';
    });