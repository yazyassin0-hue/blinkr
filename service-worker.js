self.addEventListener('install', function(event){
  self.skipWaiting();
});
self.addEventListener('activate', function(event){
  self.clients.claim();
});
self.addEventListener('fetch', function(event){
  // network-first for simplicity
  event.respondWith(fetch(event.request).catch(()=>caches.match(event.request)));
});
