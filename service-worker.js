const CACHE='mam-is-smart-x-v4-4300';
const FILES=[
  './',
  'index.html',
  'manifest.json',
  'assets/logo-mam-is.png',
  'questions/matematika.json',
  'questions/fisika.json',
  'questions/kimia.json',
  'questions/biologi.json',
  'questions/numerik.json',
  'questions/logika.json',
  'questions/verbal.json',
  'questions/literasi.json'
];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  e.respondWith(fetch(e.request).then(res=>{
    const copy=res.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return res;
  }).catch(()=>caches.match(e.request)));
});
