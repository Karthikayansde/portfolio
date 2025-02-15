'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e0e93557961d73803198f534ff518b94",
"assets/AssetManifest.bin.json": "9c609eec19907305ad9bacd48d6bbebf",
"assets/AssetManifest.json": "835a776f97544fd28c3313c0e986c414",
"assets/assets/11.PNG": "2af946db2407ac64cfdaafe0ff6ec8c8",
"assets/assets/22.PNG": "e26943d7cb34e5903e754605f584b829",
"assets/assets/33.PNG": "4d1d2a5cfab30482197b5522cbb7968e",
"assets/assets/44.PNG": "195943edabf80072bfda029c44eed0ba",
"assets/assets/55.PNG": "15fa7c5b7c510d482b67d7070a8bf8de",
"assets/assets/ample.gif": "6f02c541f2247303f52d00e3f1096ffc",
"assets/assets/appStore.png": "8d8f08e1de9007e8af37f7aa0ad49446",
"assets/assets/bgImage.jpg": "17b102e8e539dee9cd96ecb67a19709d",
"assets/assets/BgImageContact.JPG": "a4e6cc78bbdca0d9603377bc7aaf1b32",
"assets/assets/bottomLeft.jpg": "96b85d84312043dcd63aeac8a58845e1",
"assets/assets/bottomRight.jpg": "e218075e93dbe7bd178299da72652a5f",
"assets/assets/Capture.PNG": "8167155123e85c3c9701be409fd42f80",
"assets/assets/fonts/NeueMontreal-Regular.otf": "4d742e8ebdf9b030dc46a59963a6e1fb",
"assets/assets/gmail.png": "66c8f4e88d969252631acf1b842393c9",
"assets/assets/left.jpg": "b4e6dc0c1692b0bbd348271438908df8",
"assets/assets/linkedin.png": "6c35c8cf4a0d0ef311eb641adba0f931",
"assets/assets/logo1010.png": "95a84b5c7a13c0119d55eb90dbd70783",
"assets/assets/logo11.png": "0679c8dc1a0315dff62b6b167690ea76",
"assets/assets/logo22.png": "50894d1e36fc5db110d34237693e9088",
"assets/assets/logo33.png": "570693aefad5225722509de701277928",
"assets/assets/logo44.jpg": "2d6f0e212fc67b45df536760e6d360ca",
"assets/assets/logo55.png": "76474444c408bab9f9fdd4def1d42118",
"assets/assets/logo66.png": "78471b51d594c7b60f0a2601db58a671",
"assets/assets/logo77.png": "7882b68fb073e1f7937d1d18221a612a",
"assets/assets/logo88.png": "7e4c887e80cc6f5ffa2677238acf3c08",
"assets/assets/logo99.png": "e1284620adc674bc8137daef17016133",
"assets/assets/myPhoto.jpeg": "7281970a80429d2e3dbe52ade25b2fe0",
"assets/assets/name_sound.mp3": "26a0c6e1c889e973dde29ad93058de5d",
"assets/assets/playstore.png": "18fab95d924ef304111a8efd2620c0a6",
"assets/assets/pngegg.png": "bda8e65b424e02ba9393bf657e575a53",
"assets/assets/pngwingGit.png": "b6e204b52431ac9ae3206c419c86213e",
"assets/assets/right.jpg": "694aae73a4cec7c8429f503a21924bc4",
"assets/assets/topLeft.jpg": "4df8c796dd1ab18a87a8258b52493bfc",
"assets/assets/topRight.jpg": "2857b260f8d4451c77592efa139e9300",
"assets/assets/www.png": "d485e1986b9bb7b6e856941260030430",
"assets/FontManifest.json": "6d8822f9a3d2a3e070e20165f7db867c",
"assets/fonts/MaterialIcons-Regular.otf": "66e572ac4c80f0ba76ad1a1601c507e8",
"assets/NOTICES": "b719c7d9b23afee0b21af1ae1f79de7d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "3067e0e0010570e5936123d3836b3474",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61152af67d3b0ee4106ed5de02529a71",
"/": "61152af67d3b0ee4106ed5de02529a71",
"main.dart.js": "ed4b0c0f5a8ee9a85dba3cb8711ef91e",
"manifest.json": "43b83f8b1aa43ef17c5ef63d39c49489",
"version.json": "006ccd41c9fd444ac60c1d325ca3241d"};
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
