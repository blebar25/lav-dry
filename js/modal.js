document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('mentions-legales-modal');
    const modalLink = document.getElementById('mentions-legales-link');
    const closeButton = document.getElementById('close-modal');

    if (!modal || !modalLink || !closeButton) {
        console.error('Un ou plusieurs éléments du modal sont manquants');
        return;
    }

    // Ouvrir le modal
    modalLink.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Fermer le modal avec le bouton
    closeButton.addEventListener('click', closeModal);

    // Fermer le modal en cliquant en dehors
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Fermer le modal avec la touche Echap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    // Initialisation
    modal.style.display = 'none';
});
