document.addEventListener('DOMContentLoaded', () => {
    // Liste des laveries
    const locations = [
        { id: 1, name: '140 rue Peyssonnel', city: 'Marseille', zip: '13002', lat: 43.3115, lng: 5.3651 },
        { id: 2, name: '8-24 rue Jean Jaurès', city: 'Noisy-le-Sec', zip: '93130', lat: 48.8897, lng: 2.4539 },
        { id: 3, name: '111-115 rue d\'Arras', city: 'Faches-Thumesnil', zip: '59115', lat: 50.5947, lng: 3.0745 },
        { id: 4, name: '9 boulevard du Général Leclerc', city: 'Roubaix', zip: '59100', lat: 50.6902, lng: 3.1797 },
        { id: 5, name: '51-55 avenue de la République', city: 'Lomme', zip: '59160', lat: 50.639732, lng: 3.0143242 },
        { id: 6, name: '106 boulevard Marguerite de Rochechouart', city: 'Paris', zip: '75018', lat: 48.8828, lng: 2.3437 },
        { id: 7, name: '749 Avenue de Dunkerque', city: 'Lomme', zip: '59160', lat: 50.6397, lng: 3.0097 },
        { id: 8, name: '50 Rue Albert Bailly', city: 'Marcq-en-Baroeul', zip: '59700', lat: 50.6745, lng: 3.0931 },
        { id: 9, name: '94 rue d\'Hurlupin', city: 'Comines', zip: '59760', lat: 50.7484, lng: 3.0097 },
        { id: 10, name: '66 rue du Bournard', city: 'Colombes', zip: '92700', lat: 48.9232, lng: 2.2548 },

        { id: 11, name: '5 rue St Gabriel', city: 'Lille', zip: '59000', lat: 43.3115, lng: 5.3651 },
        { id: 12, name: '74 cours de la Liberté', city: 'Lyon', zip: '69003', lat: 48.8897, lng: 2.4539 },
        { id: 13, name: '162 Cours du Docteur long', city: 'Lyon', zip: '69003', lat: 50.5947, lng: 3.0745 },
        { id: 14, name: '227 rue Alfred Motte', city: 'Roubaix', zip: '59100', lat: 50.6902, lng: 3.1797 },
        { id: 15, name: '139 rue dauphiné', city: 'Lyon', zip: '69003', lat: 50.6397, lng: 3.0097 },
        { id: 16, name: '2 rue David', city: 'Lyon', zip: '69003', lat: 48.8828, lng: 2.3437 },
        { id: 17, name: '14 place gabriel Rambaud', city: 'Lyon', zip: '69001', lat: 50.6397, lng: 3.0097 },
        { id: 18, name: '', city: 'Aubervilliers', zip: '93300', lat: 48.912435, lng: 2.3834617 },
        { id: 19, name: '22 rue du lieutenant colonel Girard', city: 'Lyon', zip: '69007', lat: 50.7484, lng: 3.0097 },
        { id: 20, name: '78 Cr. Emile Zola', city: 'Villeurbanne', zip: '69100', lat: 48.9232, lng: 2.2548 },
        { id: 21, name: '23 rue Franklin ', city: 'Lyon', zip: '69002', lat: 50.7484, lng: 3.0097 },
        { id: 22, name: '22 rue Etienne richerand ', city: 'Lyon', zip: '69003', lat: 48.9232, lng: 2.2548 }
    ];

    // Images génériques pour les carrousels
    const genericImages = [
        'https://images.unsplash.com/photo-1545173168-9f1947eebb7f',
        'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5',
        'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60'
    ];

    // Images spécifiques pour certaines laveries
    const specificImages = {
        1: [ // Peyssonnel
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.42.10.jpeg',
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.41.20.jpeg',
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.41.40.jpeg',
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.42.46.jpeg',
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.44.14.jpeg',
            'images/Peyssonnel/WhatsApp Image 2025-02-11 at 12.46.18.jpeg'
        ],
        2: [ // Noisy
            'images/Noisy/Noisy_1.JPG',
            'images/Noisy/Noisy_2.JPG',
            'images/Noisy/Noisy_3.JPG',
            'images/Noisy/Noisy_4.JPG',
            'images/Noisy/Noisy_5.JPG',
            'images/Noisy/Noisy_6.JPG',
            'images/Noisy/Noisy_7.JPG',
            'images/Noisy/Noisy_8.JPG'
        ],
        3: [ // Faches
            'images/Faches/PHOTO-2024-12-16-12-18-26.jpg',
            'images/Faches/PHOTO-2024-12-16-12-18-27.jpg'
        ],
        4: [ // Roubaix GL
            'images/RoubaixGL/RGL1.jpeg',
            'images/RoubaixGL/RGL2.jpeg',
            'images/RoubaixGL/RGL3.jpeg',
            'images/RoubaixGL/RGL4.jpeg',
            'images/RoubaixGL/RGL5.jpeg'
        ],
        5: [ // Lomme République
            'images/Lomme_republique/REPUBLIQUE_1.jpg',
            'images/Lomme_republique/REPUBLIQUE_2.jpg',
            'images/Lomme_republique/REPUBLIQUE_3.jpg',
            'images/Lomme_republique/REPUBLIQUE_4.jpg',
            'images/Lomme_republique/REPUBLIQUE_5.jpg'        
        ],
        7: [ // Lomme_d
            'images/Lomme_d/Lomme_d_1.jpeg',
            'images/Lomme_d/Lomme_d_2.jpeg',
            'images/Lomme_d/Lomme_d_3.jpeg'
        ],
        8: [ // Marcq_en_Baroeul
            'images/Marcq_en_Baroeul/Marcq_en_Baroeul_1.jpeg',
            'images/Marcq_en_Baroeul/Marcq_en_Baroeul_2.jpeg',
            'images/Marcq_en_Baroeul/Marcq_en_Baroeul_3.jpeg',
            'images/Marcq_en_Baroeul/Marcq_en_Baroeul_4.jpeg',
            'images/Marcq_en_Baroeul/Marcq_en_Baroeul_5.jpeg'        
        ],
        9: [ // Comines
            'images/Comines/Comines_1.jpeg',
            'images/Comines/Comines_2.jpeg'     
        ],
        10: [ // Colombes
            'images/Colombes/Colombes_1.JPG',
            'images/Colombes/Colombes_2.JPG',
            'images/Colombes/Colombes_3.JPG',
            'images/Colombes/Colombes_4.JPG',
            'images/Colombes/Colombes_5.JPG',
            'images/Colombes/Colombes_6.JPG'        
        ],
        11: [ // St_gabriel
            'images/St_gabriel/St_gabriel_1.jpeg',
            'images/St_gabriel/St_gabriel_2.jpeg',
            'images/St_gabriel/St_gabriel_3.jpeg',
            'images/St_gabriel/St_gabriel_4.jpeg',
            'images/St_gabriel/St_gabriel_5.jpeg',
            'images/St_gabriel/St_gabriel_6.jpeg',
            'images/St_gabriel/St_gabriel_7.jpeg'
        ],
        14: [ // Roubaix Motte
            'images/RoubaixM/RM1.jpeg',
            'images/RoubaixM/RM2.jpeg',
            'images/RoubaixM/RM3.jpeg',
            'images/RoubaixM/RM4.jpeg',
            'images/RoubaixM/RM5.jpeg',
            'images/RoubaixM/RM6.jpeg',
            'images/RoubaixM/RM7.jpeg'
        ]
    };

    // Générer les carrousels
    const container = document.getElementById('laveries-container');
    if (container) {
        container.innerHTML = locations.map(location => `
            <div class="laverie-card ${location.id >= 11 ? 'coming-soon-card' : ''} bg-gradient-to-b from-blue-50 to-white p-4 rounded-lg shadow-lg relative">
                ${location.id >= 11 ? 
                    `<div class="absolute top-2 right-2 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Prochainement</div>` :
                    location.id === 4 || location.id === 10 ? 
                    `<div class="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Séchoir écologique</div>` : 
                    location.id === 6 ?
                    `<div class="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Lessive offerte</div>` :
                    location.name.toLowerCase().includes('séchoir') ? 
                    `<div class="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">Écologique</div>` : 
                    ''}
                <div id="carousel${location.id}" class="carousel slide relative rounded-lg overflow-hidden" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        ${(specificImages[location.id] || genericImages).map((img, index) => `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img src="${img}${!specificImages[location.id] ? '?q=80&w=800&auto=format&fit=crop' : ''}" class="d-block w-100" alt="Laverie ${location.name}">
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
                            <a href="${getDirectionsUrl(location)}" target="_blank" class="directions-btn bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition-colors">
                                <svg viewBox="0 0 24 24" class="w-5 h-5 text-gray-600">
                                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                </svg>
                            </a>
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
    }

    // Fonction pour obtenir l'URL Google Maps
    function getDirectionsUrl(location) {
        const address = `${location.name}, ${location.zip} ${location.city}, France`;
        const encodedAddress = encodeURIComponent(address);
        return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    }

    // Initialiser la carte
    const map = L.map('map').setView([46.603354, 1.888334], 6); // Centre de la France
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    // Créer un groupe pour les marqueurs
    const markersGroup = L.featureGroup();

    // Ajouter les marqueurs
    const markers = [];
    locations.forEach(location => {
        // Ne pas ajouter de marqueur pour les futures laveries (ID 11-22)
        if (location.id >= 11) return;

        const marker = L.marker([location.lat, location.lng]);
        marker.addTo(markersGroup);
        
        // Créer le contenu du popup
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `
            <strong class="text-estate-800 block mb-2 text-lg">${location.name}</strong>
            <span class="text-estate-600 block mb-3">${location.city}, ${location.zip}</span>
            <a href="${getDirectionsUrl(location)}" target="_blank" class="directions-btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center mx-auto">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Itinéraire
            </a>
        `;

        // Créer le popup avec le contenu personnalisé
        marker.bindPopup(popupContent);
        markers.push(marker);
    });

    // Ajouter le groupe à la carte et ajuster la vue
    markersGroup.addTo(map);
    map.fitBounds(markersGroup.getBounds(), { padding: [50, 50] });

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
