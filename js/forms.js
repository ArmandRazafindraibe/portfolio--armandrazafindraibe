// forms.js - Gestion des formulaires de contact

const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Simuler l'envoi (remplacer par votre logique backend)
        console.log('Formulaire soumis:', formData);

        // Afficher le message de succès
        if (successMessage) {
            successMessage.classList.add('show');
            contactForm.reset();

            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);
        }

        // Si vous avez un backend, vous pouvez décommenter le code suivant:
        /*
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                successMessage.classList.add('show');
                contactForm.reset();
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 5000);
            }
        })
        .catch(error => console.error('Erreur:', error));
        */
    });
}
