var CACHE_NAME = 'staticV1';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                './',
                //estilos
                "./css/materialize.css",
                "./css/style.css",
                //javascript
                "./js/init.js",
                "./js/materialize.js",
                "./js/jquery-2.1.1.min.js",
                //imagens
                "./assets/img/logo1.png",
                //manifest
                "./manifest.json"
               
             ]);
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
