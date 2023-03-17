self.addEventListener('install', (event) => {
    let CACHE_NAME = 'xyz-cache'
    let urlsToCache = [
        '/',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        '/apple-touch-icon.png',
        '/favicon.ico',
        '/favicon.svg',
        '/logo-lynx.svg',
        '/logo-lynx-text.svg',
        '/maskable_icon.png',
        '/maskable_icon_x192.png',
        '/maskable_icon_x512.png',
        '/mstile-150x150.png'/* ,
        '/assets/index.d0964974.css',
        '/assets/index.0f7da162.js'*/
    ]
    event.waitUntil(
        /* open method available on caches, takes in the name of cache as the first parameter. 
            It returns a promise that resolves to the instance of cache.
            All the URLS above can be added to cache using the addAll method. */
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(urlsToCache))
    );
});