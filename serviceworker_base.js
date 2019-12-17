var CACHE_NAME = '@@CACHENAME@@';
var urlsToCache = [
    '/',
    '/index.html',
    '/css/skyblue.min.css',
    '/images/icons/icon.png',
    '/favicon.ico',
    '/fonts/pe-icon/Pe-icon-7-stroke.eot',
    '/fonts/pe-icon/Pe-icon-7-stroke.svg',
    '/fonts/pe-icon/Pe-icon-7-stroke.ttf',
    '/fonts/pe-icon/Pe-icon-7-stroke.woff'
];

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache.map((url) => new Request(url, {credentials: 'same-origin'})));
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request, {ignoreSearch: true}).then(function (response) {
            return response || fetch(event.request);
        })
    );
});