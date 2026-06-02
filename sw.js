const CACHE_NAME = 'aeropulse-local-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './images/aeropulse-icon.svg',
  './9e231f3ade7a41a7d02b0c10b93a62b3.jpg',
  './732b252bde412f7ca1e0369b69630457.jpg',
  './d7066b21a0a32202bbfa64f0e06faf48.jpg',
  './image-2.png',
  './images/9e231f3ade7a41a7d02b0c10b93a62b3.jpg',
  './images/732b252bde412f7ca1e0369b69630457.jpg',
  './images/d7066b21a0a32202bbfa64f0e06faf48.jpg',
  './images/image-2.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached || caches.match('./index.html'));
      return cached || network;
    })
  );
});
