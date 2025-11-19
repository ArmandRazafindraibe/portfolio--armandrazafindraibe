// filters.js - Filtrage des projets

const filterBtns = document.querySelectorAll('.filter-btn');
const projetCards = document.querySelectorAll('.projet-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Mettre à jour le bouton actif
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projetCards.forEach(card => {
            const categories = card.getAttribute('data-categories');
            
            if (filter === 'all' || categories.includes(filter)) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});
