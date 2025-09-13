self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('task-app').then(function (cache) {
      return cache.addAll([
        '/task-pwa/',
        '/task-pwa/index.html',
        '/task-pwa/manifest.json',
        '/task-pwa/service-worker.js',
        '/task-pwa/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
