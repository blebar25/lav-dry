document.addEventListener('DOMContentLoaded', () => {
    // Liste des laveries
    const locations = [
        { id: 1, name: '140 rue Peyssonnelle', city: 'Marseille', zip: '13002', lat: 43.3115, lng: 5.3651 },
        { id: 2, name: '8-24 rue Jean Jaurès', city: 'Noisy-le-Sec', zip: '93130', lat: 48.8897, lng: 2.4539 },
        { id: 3, name: '111-115 rue d\'Arras', city: 'Faches-Thumesnil', zip: '59115', lat: 50.5947, lng: 3.0745 },
        { id: 4, name: '9 boulevard du Général Leclerc', city: 'Roubaix', zip: '59100', lat: 50.6902, lng: 3.1797 },
        { id: 5, name: '51-55 avenue de la République', city: 'Lomme', zip: '59160', lat: 50.6397, lng: 3.0097 },
        { id: 6, name: '106 boulevard Marguerite de Rochechouart', city: 'Paris', zip: '75018', lat: 48.8828, lng: 2.3437 },
        { id: 7, name: '749 Avenue de Dunkerque', city: 'Lomme', zip: '59160', lat: 50.6397, lng: 3.0097 },
        { id: 8, name: '50 Rue Albert Bailly', city: 'Marcq-en-Baroeul', zip: '59700', lat: 50.6745, lng: 3.0931 },
        { id: 9, name: '94 rue d\'Hurlupin', city: 'Comines', zip: '59760', lat: 50.7484, lng: 3.0097 },
        { id: 10, name: '66 rue du Bournard', city: 'Colombes', zip: '92700', lat: 48.9232, lng: 2.2548 },
        { id: 11, name: '5 rue St Gabriel', city: 'Lille', zip: '59000', lat: 50.6329, lng: 3.0573 },
        { id: 12, name: '74 cours de la Liberté', city: 'Lyon', zip: '69003', lat: 45.7589, lng: 4.8430 },
        { id: 13, name: '162 Cours du Docteur Long', city: 'Lyon', zip: '69003', lat: 45.7508, lng: 4.8867 },
        { id: 14, name: '227 rue Alfred Motte', city: 'Roubaix', zip: '59100', lat: 50.6902, lng: 3.1797 },
        { id: 15, name: '139 rue Dauphiné', city: 'Lyon', zip: '69003', lat: 45.7508, lng: 4.8867 },
        { id: 16, name: '2 rue David', city: 'Lyon', zip: '69003', lat: 45.7589, lng: 4.8430 },
        { id: 17, name: '14 place Gabriel Rambaud', city: 'Lyon', zip: '69001', lat: 45.7694, lng: 4.8322 },
        { id: 18, name: '3 avenue du Général Brosset', city: 'Écully', zip: '69160', lat: 45.7833, lng: 4.7833 },
        { id: 19, name: '22 rue du Lieutenant Colonel Girard', city: 'Lyon', zip: '69007', lat: 45.7508, lng: 4.8867 },
        { id: 20, name: '78 cours Émile Zola', city: 'Villeurbanne', zip: '69100', lat: 45.7694, lng: 4.8867 },
        { id: 21, name: '23 rue Franklin', city: 'Lyon', zip: '69002', lat: 45.7508, lng: 4.8322 },
        { id: 22, name: '22 rue Étienne Richerand', city: 'Lyon', zip: '69003', lat: 45.7589, lng: 4.8430 }
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
            <div class="laverie-card bg-gradient-to-b from-blue-50 to-white p-4 rounded-lg shadow-lg">
                <div id="carousel${location.id}" class="carousel slide relative rounded-lg overflow-hidden" data-bs-ride="carousel">
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
                <div class="card-content mt-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-semibold text-estate-800">${location.name}</h3>
                            <p class="text-estate-600">${location.city}, <span class="font-medium">${location.zip}</span></p>
                        </div>
                        <div class="flex gap-2">
                            <button class="directions-btn bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition-colors" 
                                    data-lat="${location.lat}" 
                                    data-lng="${location.lng}">
                                <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-600">
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                            </button>
                        </div>
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

        // Ajouter les événements click pour les boutons d'itinéraire
        document.querySelectorAll('.directions-btn').forEach(btn => {
            btn.addEventListener('click', async () => {
                const lat = btn.dataset.lat;
                const lng = btn.dataset.lng;
                const directionsUrl = await getDirectionsUrl(lat, lng);
                window.open(directionsUrl, '_blank');
            });
        });
    }

    // Initialiser la carte
    const map = L.map('map').setView([46.603354, 1.888334], 6); // Centre de la France
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    // Fonction pour obtenir l'URL de l'itinéraire Google Maps
    function getDirectionsUrl(destLat, destLng) {
        return new Promise((resolve) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const origin = `${position.coords.latitude},${position.coords.longitude}`;
                        const destination = `${destLat},${destLng}`;
                        resolve(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`);
                    },
                    () => {
                        // En cas d'erreur ou de refus, utiliser juste la destination
                        resolve(`https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&travelmode=driving`);
                    }
                );
            } else {
                // Si la géolocalisation n'est pas supportée
                resolve(`https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&travelmode=driving`);
            }
        });
    }

    // Ajouter les marqueurs
    const markers = [];
    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        
        // Créer le contenu du popup avec le bouton d'itinéraire
        const popupContent = document.createElement('div');
        popupContent.className = 'text-center';
        popupContent.innerHTML = `
            <strong class="text-estate-800 block mb-2 text-lg">${location.name}</strong>
            <span class="text-estate-600 block mb-3">${location.city}, ${location.zip}</span>
            <button class="directions-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center mx-auto">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Itinéraire
            </button>
        `;

        // Ajouter l'événement click sur le bouton d'itinéraire
        const directionsBtn = popupContent.querySelector('.directions-btn');
        directionsBtn.addEventListener('click', async () => {
            const directionsUrl = await getDirectionsUrl(location.lat, location.lng);
            window.open(directionsUrl, '_blank');
        });

        // Créer le popup avec le contenu personnalisé
        marker.bindPopup(popupContent);
        markers.push(marker);
    });

    // Ajuster la vue de la carte pour montrer tous les marqueurs
    const group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds().pad(0.1));

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
