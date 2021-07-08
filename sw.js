self.addEventListener('install', (e) => {
	console.log('sw installed');
});

self.addEventListener('activate', (e) => {
	console.log('sw activated');
});
