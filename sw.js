// Minimal service worker for PWA installability
const CACHE_NAME = 'food-finder-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass through all requests to network (no offline caching)
  event.respondWith(fetch(event.request));
});
