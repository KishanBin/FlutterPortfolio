'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b6dae3579021e8591987c76de474d536",
"assets/AssetManifest.bin.json": "ee67a0b7cc852220c628b9e3879d3578",
"assets/AssetManifest.json": "d7b9ae52a115b5290a608ef89c3409db",
"assets/Assets/3dmodel/cyberpunk_car.glb": "993efb2c16af4729f033fede5a443f39",
"assets/Assets/fonts/airstrike/airstrike.ttf": "4d3a3a8495c885e288ee63d2e0f0b5f8",
"assets/Assets/fonts/airstrike/airstrikebold.ttf": "da7557ed2bbd032697cd63666335f8da",
"assets/Assets/fonts/roboto/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/Assets/fonts/varelmo/Varelmo.otf": "2b56c2f11d464a6ed3213c3a280f696b",
"assets/Assets/fonts/varelmo/Varelmo.ttf": "ed9d6dd97b82515f68dccc2affd12885",
"assets/Assets/Images/Kishan.png": "6ab2c322f80729fbeca2c34f2334b1e3",
"assets/Assets/Images/project/cal/cal1.jpg": "56905e8f93d4d19d13eb21cf571f8271",
"assets/Assets/Images/project/cal/cal2.jpg": "511a2b3fc9c4b297d2913bee58a2b45c",
"assets/Assets/Images/project/cal/calculator.png": "142c6e61aba9016266e950eccbc6f1ba",
"assets/Assets/Images/project/chat/chat1.jpg": "c90e74fb7b62aaa0d4b7fec2af3cf2ea",
"assets/Assets/Images/project/chat/chat2.jpg": "3d2bd0106613dba4e2471c23e25f3824",
"assets/Assets/Images/project/chat/chat3.jpg": "126b732cb05571548547911035678955",
"assets/Assets/Images/project/chat/chat4.jpg": "001a439dabc81095d3bdc9b0e44f5082",
"assets/Assets/Images/project/chat/chat5.jpg": "43fc9f585174cdfdbe2d54889479f1b8",
"assets/Assets/Images/project/chat/Chatify.jpg": "bddf6acfc4d610e074ba9493f82bfe58",
"assets/Assets/Images/skill/canva.jpg": "2ed70791ed4ed103afbdc42d30003497",
"assets/Assets/Images/skill/dart.jpg": "fcaaa553aeee881874b5998d1194b74d",
"assets/Assets/Images/skill/figma.png": "0a5514e881baa6a8a615f78c1040af09",
"assets/Assets/Images/skill/firebase.jpg": "fc876044f33dce61561c8b2e79cc7e5f",
"assets/Assets/Images/skill/flutter.png": "cddbe3d50b83fb44d7c640e53d89b258",
"assets/Assets/Images/skill/git.jpg": "faaf6e7c707390d104329fc24fe14c1c",
"assets/Assets/Images/skill/github.jpg": "c8b379fb23ccd3937de27aafa0e44e45",
"assets/Assets/Images/skill/htmlCss.jpg": "a2ac8ce0423623573b0475b5cdeda14d",
"assets/FontManifest.json": "7202b6a0df3361c59abdfad04dc65937",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "9ec75db637f417a65f6c3d2309e4f066",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model-viewer.min.js": "da8ab9e8570d09c7a44ba234786d34f7",
"assets/packages/flutter_3d_controller/assets/template.html": "24a1f29951029adea5122572451138fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "e254ba0aec595fff1aa5e6498f6628f8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6fe6cd732292f7e6d7dd4d99e12b5c62",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "7c51ea09dc2e10404541b0bbdffdf3f4",
"icons/Icon-512.png": "83be16598996ca743bf57e1daef89711",
"icons/Icon-maskable-192.png": "7c51ea09dc2e10404541b0bbdffdf3f4",
"icons/Icon-maskable-512.png": "83be16598996ca743bf57e1daef89711",
"index.html": "98a383007d9ac700fa176429a66642f5",
"/": "98a383007d9ac700fa176429a66642f5",
"main.dart.js": "3df5a996f105cdd7d3b3e72e81bd02d2",
"manifest.json": "6c2921dd496bac31a6f652f8ced600e9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
