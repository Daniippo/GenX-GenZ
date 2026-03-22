const CACHE_NAME = 'Card'; // Ho aggiornato la versione a v2 perché abbiamo cambiato i file
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './xxxxx.png',        // <--- Aggiunta la tua nuova icona!
  './style.css',        // Aggiungi qui anche il tuo file CSS se ne hai uno
  './script.js'         // E il file con la logica del traduttore
];

// Fase di installazione
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Traduttore GenX-GenZ: salvataggio file in cache...');
      return cache.addAll(ASSETS);
    })
  );
});

// Gestione delle richieste (Fetch)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      // Se il file è in cache lo restituisce, altrimenti lo scarica da rete
      return cacheRes || fetch(evt.request);
    })
  );
});
