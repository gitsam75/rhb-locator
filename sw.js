self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installiert');
});

self.addEventListener('fetch', (e) => {
    // Leitet vorerst einfach alle Anfragen normal ans Internet weiter
    e.respondWith(fetch(e.request));
});
