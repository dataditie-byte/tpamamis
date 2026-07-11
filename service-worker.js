const CACHE='mam-is-smart-x-v3-1500';
const FILES=[
  './',
  'index.html',
  'manifest.json',
  'assets/logo-mam-is.png',
  'questions/matematika.json',
  'questions/fisika.json'
];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',e=>{
  e.respondWith(
    fetch(e.request)
      .then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put(e.request,copy));
        return res;
      })
      .catch(()=>caches.match(e.request))
  );
});
