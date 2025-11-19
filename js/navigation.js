// navigation.js - Gestion de la navigation et du menu hamburger

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Fermer le menu en cliquant sur un lien
if (navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Mise à jour de la navigation active au scroll
const updateActiveNavigation = () => {
    const currentPath = window.location.pathname;
    const navLinksAll = document.querySelectorAll('.nav-links a');

    navLinksAll.forEach(link => {
        const href = link.getAttribute('href');
        
        // Comparer les chemins
        if (currentPath.endsWith(href) || 
            (href === 'index.html' && currentPath.endsWith('/')) ||
            (currentPath.includes('pages/') && href.includes(currentPath.split('/').pop()))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Appeler au chargement et lors de navigation
updateActiveNavigation();
window.addEventListener('load', updateActiveNavigation);
