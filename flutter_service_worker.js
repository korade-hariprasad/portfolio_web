'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "36b16d6b823d12414aef95e267cfb7ac",
"assets/AssetManifest.bin.json": "37721e120fa74e08277dd036f2ff6899",
"assets/AssetManifest.json": "bd0ade22def4c58fd0ec53d1538ba826",
"assets/assets/aFelicitation.jpg": "8cb16cdbe0dbd89f7db369d889b5a312",
"assets/assets/avish.jpg": "dde1eacba6a1e66ddba811a459a536cf",
"assets/assets/avisMit.jpg": "64d985c9ee5f5b59f883f098d07313b3",
"assets/assets/aviStateCert.jpg": "c114991aad21657ab7c540c46833ed38",
"assets/assets/aviStateFelicitation.jpg": "25e8df83a6b60d75a16938d2052c06f6",
"assets/assets/aviUniCert.jpg": "dad5c88f0ac6bfd3c5f61aa324692110",
"assets/assets/aviUniNews.jpg": "dbfde522065deb32955ef67ee6caf928",
"assets/assets/bannerImage1.png": "a9e7d336365e45af500fa84d907effef",
"assets/assets/bannerImage2.png": "afe2d70e70fe54436b5539b42bacb1cb",
"assets/assets/bcs.jpg": "30325fe5106ff638fcd921aba266ca4f",
"assets/assets/boredbrain.jpg": "eb508e6291aebbe7cb88fb854b5dc151",
"assets/assets/cognitive.png": "c7a4e965d4a21a92bcc5965c475dd69b",
"assets/assets/conv.jpg": "f4531ee7ced85a6cda81c11dfc2c95c3",
"assets/assets/dart.png": "81824107f13f1fdf9abd9c8d6470aafa",
"assets/assets/firebase.png": "d12cf916a663b52d01d2e0bbb2e7c18a",
"assets/assets/flutter.png": "c940e427945a4d75c296f346cfb78cb7",
"assets/assets/github.png": "8a116e0acf74c73dcee645dae9687ec8",
"assets/assets/gpa.png": "d2d1524f43bc5f42d26cc4456a5220a8",
"assets/assets/java.png": "9f9565df4350f2141ec2b0b5aaa23f98",
"assets/assets/keyemu.jpg": "2d32a0aab4444925bb72767b39c8bc9b",
"assets/assets/KeyEmuPoster.jpg": "19ae3a1075c421101feeb4dc1562bb04",
"assets/assets/keymu.jpg": "a7f4cc4c6e19b579c3b425be1690c2c7",
"assets/assets/linkedin.png": "e3c62b407d410408601fde9f9609fdb9",
"assets/assets/mail.png": "3f6c4c014901200e7b4729ddd403a717",
"assets/assets/masterBg.jpg": "339027c7a1a8c24db7a28b400a9a6b12",
"assets/assets/mca1.jpeg": "4ea3221c6267c02583bdc5a9cebb3405",
"assets/assets/mca2.jpg": "9a697fe3dea71fd39a7ecb93d38ebc74",
"assets/assets/mongo.png": "dd8319d428f8fbf7a61ee383b265e2f6",
"assets/assets/nptel.png": "a071bdb8bc7fa68f901f9768ff149696",
"assets/assets/pfp.jpg": "f26504910c2dea02caed0adfa3c925eb",
"assets/assets/shreenath.jpg": "5bd51da22ad89dbe1cba791a7d0785df",
"assets/assets/studio.png": "2cb44475975daf90559b90142be25ca1",
"assets/assets/sumago.jpg": "9a4d906b676d6b1c44f68e7de7528cfb",
"assets/assets/sumago1.jpg": "8994d005c47bda262d2428ca7bd6a139",
"assets/assets/sumago2.jpg": "ace1e200c84470b3dba7e07a4bcd6b07",
"assets/assets/sumago3.jpg": "270eb19a83d827b47540a7b56b0542bd",
"assets/assets/sumagoCert.jpg": "e8476ecb19082549de943d0b3d7593fe",
"assets/assets/trakify.png": "924030e9b59f55588400a74b76aae6ef",
"assets/assets/vol.jpg": "3e1ef978c2eeb115f1307b0d45226bb3",
"assets/assets/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/wipro.jpg": "c55929ff81f2f49e5522344f9ee978ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "871d120ba241c94c5cf9bd83dea439de",
"assets/NOTICES": "03ee58ef44783a951956e83df8cc0e6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "706ef185d8af2aefe7eb4679737dbe52",
"icons/icon-192.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/icon-512.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/Icon-maskable-192.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"icons/Icon-maskable-512.png": "5088f0d4eb337821ac292b7a90bcc5c7",
"index.html": "ad4198740f4c7f734fdb2c1cc3243f2b",
"/": "ad4198740f4c7f734fdb2c1cc3243f2b",
"main.dart.js": "9a504daaa0f430c9b74dca8aa5cff5a0",
"manifest.json": "cd4f476f205dccfe4ee8e812c317016e",
"version.json": "e521cce27e8e40d119b0c83c0480dbae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
