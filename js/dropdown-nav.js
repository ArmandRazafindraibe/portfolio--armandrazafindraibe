// dropdown-nav.js - Gestion du dropdown de navigation

document.addEventListener('DOMContentLoaded', () => {
    initializeDropdown();
});

/**
 * Initialiser le dropdown de navigation
 */
function initializeDropdown() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    // Gérer le click sur le toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.closest('.nav-dropdown');
            toggle.classList.toggle('active');
            dropdown.classList.toggle('active');
        });
    });

    // Fermer le dropdown quand on clique ailleurs
    document.addEventListener('click', (e) => {
        navDropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-toggle').classList.remove('active');
            }
        });
    });

    // Fermer le dropdown quand on clique sur un lien du menu
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.querySelector('.dropdown-toggle').classList.remove('active');
            });
        });
    });
}

/**
 * Ouvrir le dropdown
 */
function openDropdown() {
    const navDropdown = document.querySelector('.nav-dropdown');
    if (navDropdown) {
        navDropdown.classList.add('active');
        navDropdown.querySelector('.dropdown-toggle').classList.add('active');
    }
}

/**
 * Fermer le dropdown
 */
function closeDropdown() {
    const navDropdown = document.querySelector('.nav-dropdown');
    if (navDropdown) {
        navDropdown.classList.remove('active');
        navDropdown.querySelector('.dropdown-toggle').classList.remove('active');
    }
}
