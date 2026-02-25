self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("healify").then(cache=>cache.addAll(["./"]))
  );
});
