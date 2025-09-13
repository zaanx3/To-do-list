self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('task-app').then(function (cache) {
      return cache.addAll([
        '/To-do-list/',
        '/To-do-list/index.html',
        '/To-do-list/manifest.json',
        '/To-do-lidt/service-worker.js',
        '/To-do-lidt/icon.png'
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

