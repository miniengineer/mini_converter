const files = [
  './',
  '/index.html',
  '/src/App.js',
  '/src/App.css',
  '/src/index.css',
  '/src/index.js'
];

self.addEventListener('install', event => {
  //Performing tasks for installation step
  event.waitUntil(
    caches.open('files').then((cache) => {
      console.log('Opened cash');
      return cache.addAll(files);
    })
  );
});


self.addEventListener('fetch', event => {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});


