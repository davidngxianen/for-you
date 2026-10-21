// Offline support: caches the app and every song on first open, so the
// album keeps working with no internet.
importScripts("album.js");

const CACHE = "album-v" + self.ALBUM.version;
const SHELL = ["./", "index.html", "album.js", "manifest.webmanifest",
  "icon-180.png", "icon-192.png", "icon-512.png", self.ALBUM.cover];
const AUDIO = self.ALBUM.tracks.map((t) => t.file);
const PHOTOS = (self.ALBUM.wrapped || []).map((s) => s.photo).filter(Boolean);

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll([...SHELL, ...AUDIO, ...PHOTOS])));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: keep a copy so the font still works offline.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.match(req).then((hit) => hit || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }))
    );
    return;
  }
  if (url.origin !== location.origin) return;

  // Safari only plays audio served as byte ranges (HTTP 206), so slice
  // the cached file ourselves.
  if (req.headers.has("range")) {
    e.respondWith(rangeResponse(req));
    return;
  }

  // Page + album info: try the network first so edits show up, fall back to cache.
  if (req.mode === "navigate" || url.pathname.endsWith("album.js")) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("./")))
    );
    return;
  }

  e.respondWith(caches.match(req, { ignoreSearch: true }).then((r) => r || fetch(req)));
});

async function rangeResponse(req) {
  const cached = await caches.match(req.url, { ignoreSearch: true });
  if (!cached) return fetch(req);
  const buf = await cached.arrayBuffer();
  const total = buf.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get("range") || "");
  let start = m && m[1] ? parseInt(m[1], 10) : 0;
  let end = m && m[2] ? parseInt(m[2], 10) : total - 1;
  if (m && !m[1] && m[2]) { start = total - parseInt(m[2], 10); end = total - 1; }
  end = Math.min(end, total - 1);
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    headers: {
      "Content-Type": cached.headers.get("Content-Type") || "audio/mp4",
      "Content-Range": `bytes ${start}-${end}/${total}`,
      "Content-Length": String(end - start + 1),
      "Accept-Ranges": "bytes",
    },
  });
}
