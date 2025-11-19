// competences.js - Gestion des accordéons des compétences

document.addEventListener('DOMContentLoaded', () => {
    initializeAccordions();
});

/**
 * Initialiser tous les accordéons
 */
function initializeAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', toggleAccordion);
    });
}

/**
 * Basculer un accordéon (ouvrir/fermer)
 */
function toggleAccordion(event) {
    const header = event.currentTarget;
    const item = header.closest('.accordion-item');
    
    // Vérifier si cet accordéon est déjà ouvert
    const isActive = item.classList.contains('active');
    
    // Fermer tous les autres accordéons (optionnel - peut être commenté)
    // closeAllAccordions();
    
    // Basculer l'état de cet accordéon
    if (isActive) {
        item.classList.remove('active');
    } else {
        item.classList.add('active');
    }
}

/**
 * Fermer tous les accordéons (optionnel)
 * Décommentez pour avoir un seul accordéon ouvert à la fois
 */
function closeAllAccordions() {
    const allItems = document.querySelectorAll('.accordion-item');
    allItems.forEach(item => {
        item.classList.remove('active');
    });
}

/**
 * Ouvrir un accordéon spécifique par son ID
 */
function openAccordion(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
        const item = content.closest('.accordion-item');
        if (item) {
            item.classList.add('active');
        }
    }
}

/**
 * Fermer un accordéon spécifique par son ID
 */
function closeAccordion(contentId) {
    const content = document.getElementById(contentId);
    if (content) {
        const item = content.closest('.accordion-item');
        if (item) {
            item.classList.remove('active');
        }
    }
}

// Exemple d'utilisation: ouvrir le premier accordéon au chargement
// openAccordion('marketing');
