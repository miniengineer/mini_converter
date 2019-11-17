const files = [
  './',
  './index.html',
  '../src/App.js',
  '../src/App.css',
  '../src/index.css',
  '../src/index.js'
];

self.addEventListener('install', async e => {
  const cache = await caches.open('files');
  cache.addAll(files);
});


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
