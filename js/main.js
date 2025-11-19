// main.js - Script principal pour la gestion globale

// Assurer que le DOM est chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio chargé avec succès');

    // Initialiser les événements
    initializeEventListeners();
});

/**
 * Initialiser tous les écouteurs d'événements
 */
function initializeEventListeners() {
    // Smooth scroll links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });

    // Responsive design adjustments
    window.addEventListener('resize', handleResponsiveAdjustments);
    handleResponsiveAdjustments();
}

/**
 * Gérer le scroll fluide vers une ancre
 */
function handleSmoothScroll(e) {
    const href = this.getAttribute('href');
    
    // Ignorer si c'est un lien externe
    if (href.startsWith('http') || href.startsWith('//')) {
        return;
    }

    if (href === '#') {
        e.preventDefault();
        return;
    }

    const target = document.querySelector(href);
    if (target) {
        e.preventDefault();
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Gérer les ajustements responsifs
 */
function handleResponsiveAdjustments() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        // Ajustements pour mobile
        document.body.classList.add('mobile');
        document.body.classList.remove('desktop');
    } else {
        // Ajustements pour desktop
        document.body.classList.add('desktop');
        document.body.classList.remove('mobile');
    }
}

// Utility functions

/**
 * Vérifie si un élément est visible dans la fenêtre
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Ajoute une classe à un élément avec délai
 */
function addClassWithDelay(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.add(className);
    }, delay);
}

/**
 * Supprime une classe d'un élément avec délai
 */
function removeClassWithDelay(element, className, delay = 0) {
    setTimeout(() => {
        element.classList.remove(className);
    }, delay);
}
