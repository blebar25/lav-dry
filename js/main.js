document.addEventListener('DOMContentLoaded', () => {
    // Liste des laveries
    const locations = [
        { id: 1, name: '30 rue Pinel', city: 'Saint Denis', zip: '93200', lat: 48.9362, lng: 2.3574 },
        { id: 2, name: '27 rue Ramey', city: 'Paris', zip: '75018', lat: 48.8879, lng: 2.3476 },
        { id: 3, name: '20 rue de Lancry', city: 'Paris', zip: '75010', lat: 48.8697, lng: 2.3589 },
        { id: 4, name: '12 rue Popincourt', city: 'Paris', zip: '75011', lat: 48.8589, lng: 2.3741 },
        { id: 5, name: '3 rue Thiers', city: 'Marseille', zip: '13001', lat: 43.2965, lng: 5.3698 },
        { id: 6, name: '52 rue des Gravilliers', city: 'Paris', zip: '75004', lat: 48.8637, lng: 2.3542 },
        { id: 7, name: '122 avenue de Flandre', city: 'Paris', zip: '75019', lat: 48.8912, lng: 2.3745 },
        { id: 8, name: '14 boulevard de la Fédération', city: 'Marseille', zip: '13004', lat: 43.3025, lng: 5.3892 },
        { id: 9, name: '3 rue de Douai', city: 'Lille', zip: '59000', lat: 50.6292, lng: 3.0573 },
        { id: 10, name: '61 place de l\'Hôtel de Ville', city: 'Villeneuve d\'Ascq', zip: '59650', lat: 50.6193, lng: 3.1421 },
        { id: 11, name: '45 Place de la Victoire', city: 'Tourcoing', zip: '59200', lat: 50.7237, lng: 3.1589 }
    ];

    // Images génériques pour les carrousels
    const genericImages = [
        'https://images.unsplash.com/photo-1545173168-9f1947eebb7f',
        'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5',
        'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60'
    ];

    // Générer les carrousels
    const container = document.getElementById('laveries-container');
    if (container) {
        container.innerHTML = locations.map(location => `
            <div class="laverie-card bg-gradient-to-b from-blue-50 to-white">
                <div id="carousel${location.id}" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${genericImages.map((img, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${img}?q=80&w=800&auto=format&fit=crop" class="d-block w-100" alt="Laverie ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel${location.id}" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel${location.id}" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="card-content">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3>${location.name}</h3>
                            <p>${location.city}, <span class="font-medium">${location.zip}</span></p>
                        </div>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ' ' + location.city + ' ' + location.zip)}" 
                           class="location-link"
                           target="_blank"
                           title="Voir sur Google Maps">
                            <svg viewBox="0 0 24 24">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');

        // Initialiser les carrousels Bootstrap
        const carousels = document.querySelectorAll('.carousel');
        carousels.forEach(carousel => {
            new bootstrap.Carousel(carousel, {
                interval: 3000,
                pause: 'hover',
                wrap: true,
                touch: true
            });
        });
    }

    // Initialiser la carte
    const map = L.map('map').setView([46.603354, 1.888334], 6); // Centre de la France
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    // Ajouter les marqueurs
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`
            <div class="text-center">
                <strong class="text-estate-800">${location.name}</strong><br>
                <span class="text-estate-600">${location.city}, <span class="font-medium">${location.zip}</span></span><br>
                <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ' ' + location.city + ' ' + location.zip)}" 
                   target="_blank"
                   class="text-estate-600 hover:text-estate-800 text-sm inline-block mt-2">
                   Voir sur Google Maps
                </a>
            </div>
        `);
    });

    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mettre à jour les cartes de tarifs avec des icônes
    const servicesContainer = document.querySelector('#services');
    if (servicesContainer) {
        const washingMachineIcon = `
            <svg class="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3V3zm4 4h10M7 3v4m4-4v4m4-4v4m-8 6a4 4 0 108 0 4 4 0 00-8 0zm4 0v.01"/>
            </svg>
        `;
        
        const dryerIcon = `
            <svg class="w-8 h-8 mb-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18v18H3V3zm4 4h10M7 3v4m4-4v4m4-4v4m-8 8a4 4 0 108-4 4 4 0 00-8 4z"/>
            </svg>
        `;
        
        const serviceCards = servicesContainer.querySelectorAll('.bg-white');
        serviceCards.forEach((card, index) => {
            const icon = index % 2 === 0 ? washingMachineIcon : dryerIcon;
            const title = card.querySelector('h3');
            if (title) {
                title.insertAdjacentHTML('beforebegin', icon);
            }
        });
    }
});
