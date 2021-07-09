const staticCache = 'static-cache';
const assets = [
	'/',
	'/assets/bootstrap.min.css',
	'/assets/bootstrap.min.css.map',
	'/assets/fav-logo.png',
	'/assets/pwa.png',
	'/assets/pwa512.png',
	'/assets/script.js',
	'/assets/style.css',
	'/assets/sw-new-logo.png',
	'/index.html',
	'/about.html',
	'/contact.html',
	'/offline.html',
];

self.addEventListener('install', (e) => {
	e.waitUntil(
		caches.open(staticCache).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener('activate', (e) => {
	console.log('sw activated');
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches.match(e.request).then((res) => {
			return res || fetch(e.request);
		})
	);
});
