<<<<<<< HEAD
const CACHE_NAME = '8puzzle-retro';
=======
const CACHE_NAME = '8puzzle-v1';
>>>>>>> 303485619efebe1bd5218682f48d9bb03530e175
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
<<<<<<< HEAD
  '/logo.ico',
  '/logo (1).png'
=======
  '/favicon.ico',
>>>>>>> 303485619efebe1bd5218682f48d9bb03530e175
];

self.addEventListener('install', (event) => {
  event.waitUntil(
<<<<<<< HEAD
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(ASSETS);
    })
=======
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
>>>>>>> 303485619efebe1bd5218682f48d9bb03530e175
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> 303485619efebe1bd5218682f48d9bb03530e175
