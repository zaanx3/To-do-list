self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('task-app').then(function (cache) {
return cache.addAll([
  './',
  './index.html',
  './manifest.json',
  './service-worker.js',
  './icon.png'
]);

    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request).catch(() => {
        
        return caches.match('./index.html');
      });
    })
  );
});




