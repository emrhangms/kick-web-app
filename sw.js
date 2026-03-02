// Uygulamanın çevrimdışı önbellek adı
const CACHE_NAME = 'mac-merkezi-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Chrome'un PWA kurulum şartını sağlamak için gerekli fetch dinleyicisi
});